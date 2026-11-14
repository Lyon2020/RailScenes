(() => {
 'use strict';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 // All nine cards animate together. Phones use small animated WebP files to
 // avoid concurrent video-player/autoplay limits. Originals remain in assets.
 const narrow=matchMedia('(max-width: 760px)');
 const players=[...document.querySelectorAll('.scene-tile')].map(tile=>({
   tile, media:tile.querySelector('.scene-media'), video:tile.querySelector('video'),
   fallback:tile.querySelector('.scene-fallback'), task:tile.closest('.task-column'),
   active:false, generation:0, mode:'poster', source:''
 }));
 function stop(p){
   if(!p.active)return;
   p.active=false;p.generation++;p.mode='poster';p.source='';
   p.media.classList.remove('video-ready','animation-ready');
   p.video.onplaying=null;p.video.onerror=null;p.video.pause();
   p.video.removeAttribute('src');p.video.load();
   p.fallback.onload=null;p.fallback.onerror=null;p.fallback.hidden=true;
   p.fallback.removeAttribute('src');
 }
 function start(p){
   const source=narrow.matches?p.fallback.dataset.src:p.video.dataset.desktopSrc;
   if(p.active&&p.source===source&&p.mode!=='poster-error')return;
   stop(p);p.active=true;p.source=source;p.mode='loading';
   const generation=++p.generation;
   const current=()=>p.active&&p.generation===generation;
   function fallback(){
     if(!current()||p.mode==='animation')return;
     p.mode='animation';p.media.classList.remove('video-ready');
     p.video.onplaying=null;p.video.onerror=null;p.video.pause();
     p.video.removeAttribute('src');p.video.load();
     p.fallback.onload=()=>{if(current()){
       p.fallback.hidden=false;p.media.classList.add('animation-ready');
     }};
     p.fallback.onerror=()=>{if(current())p.mode='poster-error'};
     p.fallback.src=p.fallback.dataset.src;
   }
   if(narrow.matches){fallback();return}
   p.video.muted=true;p.video.defaultMuted=true;p.video.playsInline=true;
   p.video.onplaying=()=>{if(current()&&p.mode!=='animation'){
     p.mode='video';p.media.classList.add('video-ready');
   }};
   p.video.onerror=fallback;
   p.video.src=source;
   const attempt=p.video.play();
   if(attempt)attempt.catch(error=>{
     if(current()&&error.name!=='AbortError')fallback();
   });
 }
 function updatePlayers(){
   players.forEach(p=>document.hidden?stop(p):start(p));
 }
 let mediaTimer;
 const schedulePlayers=()=>{clearTimeout(mediaTimer);mediaTimer=setTimeout(updatePlayers,120)};
 addEventListener('resize',schedulePlayers);
 addEventListener('pageshow',schedulePlayers);
 addEventListener('online',updatePlayers);
 document.addEventListener('visibilitychange',updatePlayers);
 narrow.addEventListener('change',updatePlayers);
 updatePlayers();
 const sections=['preview','overview','benchmark','download','citation'].map(id=>document.getElementById(id));
 const links=[...document.querySelectorAll('.nav-wrap nav a')];let scheduled=false;
 function active(){scheduled=false;let id='preview';sections.forEach(s=>{if(s.getBoundingClientRect().top<180)id=s.id});links.forEach(a=>{if(a.hash==='#'+id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}
 addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(active)}},{passive:true});active();
 const taskNav=document.querySelector('.task-links');
 const taskLinks=[...taskNav.querySelectorAll('a')];
 const taskSections=taskLinks.map(a=>document.querySelector(a.hash));
 const header=document.querySelector('.site-header');
 let pendingTask=null, pendingTimer=null, taskScheduled=false;
 function selectTask(id){taskLinks.forEach(a=>{if(a.hash==='#'+id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}
 function activeTask(){
   taskScheduled=false;
   if(pendingTask){selectTask(pendingTask);return}
   const line=header.getBoundingClientRect().height+taskNav.getBoundingClientRect().height+28;
   let id=taskSections[0].id;
   taskSections.forEach(s=>{if(s.getBoundingClientRect().top<=line)id=s.id});
   selectTask(id);
 }
 function dimensions(){
   document.documentElement.style.setProperty('--task-header-height',header.getBoundingClientRect().height+'px');
   document.documentElement.style.setProperty('--task-nav-height',taskNav.getBoundingClientRect().height+'px');
   const pagePadding=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0;
   document.documentElement.style.setProperty('--task-scroll-margin',Math.max(0,header.getBoundingClientRect().height+taskNav.getBoundingClientRect().height+20-pagePadding)+'px');
   activeTask();
 }
 function clearPending(){pendingTask=null;clearTimeout(pendingTimer);activeTask()}
 function finishPending(){
   if(pendingTask){
     const target=document.getElementById(pendingTask);
     const top=scrollY+target.getBoundingClientRect().top-header.getBoundingClientRect().height-taskNav.getBoundingClientRect().height-20;
     pendingTask=null;clearTimeout(pendingTimer);
     scrollTo({top,behavior:'instant'});
   }
   activeTask();
 }
 taskLinks.forEach(a=>a.addEventListener('click',e=>{
   if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
   e.preventDefault();pendingTask=a.hash.slice(1);selectTask(pendingTask);
   history.replaceState(null,'',a.hash);
   document.querySelector(a.hash).scrollIntoView({block:'start',behavior:reduced.matches?'instant':'smooth'});
   clearTimeout(pendingTimer);pendingTimer=setTimeout(finishPending,1500);
 }));
 addEventListener('scroll',()=>{if(!taskScheduled){taskScheduled=true;requestAnimationFrame(activeTask)}},{passive:true});
 addEventListener('scrollend',finishPending);
 addEventListener('wheel',clearPending,{passive:true});
 addEventListener('touchstart',clearPending,{passive:true});
 new ResizeObserver(dimensions).observe(header);
 new ResizeObserver(dimensions).observe(taskNav);
 dimensions();
})();
