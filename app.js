(() => {
 'use strict';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
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
