/* Local static site: no tracking, external runtime, or visitor data uploads. */
"use strict";
(() => {
  const D = window.RAILSCENES, videos = window.RAILSCENES_VIDEOS || [];
  if (!D) return;
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const esc = v => String(v ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  let lang="en";try{lang=localStorage.getItem("railscenes-language")==="zh"?"zh":"en";}catch(_){}
  const L=(en,zh)=>lang==="zh"?zh:en;
  const zh={
    skip:"跳到正文",navDataset:"数据集",navBenchmarks:"基准结果",navGallery:"可视化图库",navVideos:"视频",navRelease:"开放计划",eyebrow:"轨道场景理解",prerelease:"公开前预览",heroSubtitle:"轨道场景理解的<br>多任务数据集与基准",heroCopy:"以相机与激光雷达观测记录轨道环境，连接可见场景语义与关键轨旁设施的空间几何。",explore:"浏览数据样例",releasePlan:"数据开放计划 →",realScenes:"真实轨道场景",rgbFrames:"RGB · 精选帧轮播",metricFrames:"配对样本记录",metricClasses:"分割类别 / 检测类别",metricTasks:"已完成实验的任务 + 进行中的 Occupancy",metricModalities:"互补的视觉与空间观测",
    datasetKicker:"数据集",datasetHeading:"同一轨道空间，<br>互补的感知视角。",datasetIntro:"RailScenes 将图像语义与目标几何组织在共同的轨道数据资源中。场景记录涵盖环境、光照和轨道形态的变化，同时提供不同前向距离下的小投影尺度设施观测。",datasetScope:"当前预览展示已完成的二维语义分割和三维目标检测实验。第三项任务——三维语义占用预测——仍在完善。",scopeNote:"场景覆盖说明已记录的观测条件，本身不代表跨域泛化能力或运行安全能力。",overviewCaption:"论文中的数据集总览。Occupancy 面板展示标注表示形式，其基准实验结果仍在进行中。",segTitle:"二维语义分割",segSummary:"七个语义类别描述图像中的轨道、结构、人员及周边表面。",detTitle:"三维目标检测",detSummary:"六个类别包含人员、信号灯及三类轨道标识牌，并对不同传感器输入配置进行评价。",occTitle:"三维语义 Occupancy 预测",occSummary:"采用 20 × 20 × 25 cm 体素描述空间语义。完整基准将配套提供真值生成、监督与评价说明。",resultsAvailable:"实验结果已具备",inProgress:"进行中",occNoScores:"暂不展示基准实验分数",partitionTitle:"当前数据划分",splitNote:"数量描述当前划分，不据此宣称已验证独立线路或独立路段泛化。",coverageCaption:"原记录中的类别数量。环境、光照与轨道形态为不同属性维度。",acquisitionTitle:"查看采集与标注概览",acquisitionCaption:"前视相机与 Livox Tele-15 激光雷达。交付图像分辨率为 1280 × 720。",annotationCaption:"论文中的标注分布：二维多边形数、三维框数与语义体素数，分别采用不同统计单位；多边形数不是像素数或帧数。",
    benchmarkKicker:"基准实验",benchmarkHeading:"用实验结果，<br>呈现真实挑战。",benchmarkIntro:"以下为当前论文中已完成实验的结果快照。缺失结果保持未报告状态。",distanceTitle:"前向距离分组分析",downloadCsv:"下载结果 CSV ↗",paperTable:"查看论文表格原版式",tableSource:"由所提供论文的有效 LaTeX 表格单独排版，省略方法引用以便阅读；数值和缺失项均保留。",smallTargetKicker:"聚焦远距离设施",smallTargetTitle:"前向约 100 m，<br>投影仅约 12 × 7 像素。",smallTargetCopy:"该隧道 DistancePlate 的 GT 前向坐标为 97.87 m。三维 GT 框在原图中的投影包围矩形跨度为 11.59 × 7.37 像素。原始点云中，三维框内有 1 个点，BEV 二维足迹内有 2 个点。",smallTargetNote:"IS-Fusion 与 FocalsConv 在目标附近有预测，TransFusion 的漏检被保留。该例呈现观测稀疏性，不代表可靠检测距离。",
    galleryKicker:"论文之外的更多样例",galleryHeading:"更多场景，<br>更多观察空间。",galleryIntro:"浏览已挑选的完整场景与模型对比图，点击图片可放大查看。",rawScenes:"场景原图",segShort:"语义分割",detShort:"目标检测",galleryNote:"样例经过挑选，用于定性展示，不构成随机抽样或完整测试集评价。原生预测偏差与漏检均保留。场景属性遵循原始记录；“站点”记录也可能包含轨道设施区域。",
    videosKicker:"动态场景与预测",videosHeading:"在运动中观察场景。",videosIntro:"精选分割、融合检测与纯点云检测视频。默认静音、循环，以原导出片段的 3 倍速度播放。",allVideos:"全部视频",playbackSpeed:"播放速度",pauseVideos:"暂停视频",videoNote:"3× 指相对所提供可视化片段的播放速度，不代表列车速度或模型推理帧率。各视频独立展示，不是同步对照实验。离开可视区域时暂停，并遵循减少动态效果的系统偏好；若浏览器阻止自动播放，可点击播放器播放。",
    releaseKicker:"可获取性",releaseHeading:"现在呈现预览，<br>后续开放研究资源。",releaseCopy:"数据集尚未公开。我们计划在论文接收后开放数据，并在此公布获取方式、文档、许可证与最终基准工具。",githubAccount:"GitHub 账号",available:"当前可浏览",previewTitle:"实验结果与可视化预览",previewCopy:"分割与检测结果表格、精选图片及视频展示。",occReleaseCopy:"第三项任务将在实验和配套说明完善后加入。",planned:"计划在论文接收后",datasetRelease:"数据集与基准工具开放",datasetReleaseCopy:"数据下载、标注规范、评价工具与使用条款。",footerText:"轨道场景理解 · 项目预览 · 2026 年 11 月更新",backTop:"返回顶部 ↑",openImage:"打开图片 ↗",closeHint:"按 Escape 或点击图片窗口外部关闭。"
  };
  const originals=new Map($$("[data-i18n]").map(e=>[e,e.innerHTML]));
  const names={"地上":["Above-ground","地上"],"地下非隧道":["Underground non-tunnel","地下非隧道"],"地下隧道":["Underground tunnel","地下隧道"],"站点":["Station / rail facility","站点 / 轨道设施区"],"强光":["Strong light","强光"],"弱光":["Low light","弱光"],"白天":["Daytime","白天"],"黑夜":["Nighttime","夜晚"],"直道":["Straight","直道"],"弯道":["Curved","弯道"],"岔道":["Turnout","岔道"]};
  const attr=s=>names[s]?L(...names[s]):s||L("Unspecified","未记录");
  const tags=s=>[s.environment,s.lighting,s.track_shape].filter(Boolean).map(attr).join(" · ");
  function imageButton(src,title,extra=""){return `<button class="zoomable" type="button" data-lightbox="${esc(src)}" data-title="${esc(title)}"><img src="${esc(src)}" alt="${esc(title)}" loading="lazy" decoding="async" ${extra}></button>`;}

  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
  const order=["c1","a1","a2","a3","a4","b1","b2","b3","b4","c2","c3","c4"];
  const scenes=[...D.scenes].sort((a,b)=>order.indexOf(a.panel)-order.indexOf(b.panel));
  let sceneIndex=0,scenePaused=reduced.matches;
  function renderScene(){const s=scenes[sceneIndex];$("#hero-image").src=s.src;$("#hero-image").alt=L(s.title,s.titleZh)+" · "+s.id;$("#hero-caption").textContent=L(s.title,s.titleZh);$("#hero-counter").textContent=`${String(sceneIndex+1).padStart(2,"0")} / ${scenes.length}`;$("#hero-frame").textContent=s.id;$("#scene-pause").textContent=scenePaused?"▶":"Ⅱ";$("#scene-pause").setAttribute("aria-label",scenePaused?L("Play slideshow","开始轮播"):L("Pause slideshow","暂停轮播"));}
  $("#scene-next").addEventListener("click",()=>{sceneIndex=(sceneIndex+1)%scenes.length;renderScene();});
  $("#scene-prev").addEventListener("click",()=>{sceneIndex=(sceneIndex-1+scenes.length)%scenes.length;renderScene();});
  $("#scene-pause").addEventListener("click",()=>{scenePaused=!scenePaused;renderScene();});
  window.setInterval(()=>{if(!scenePaused&&!document.hidden){sceneIndex=(sceneIndex+1)%scenes.length;renderScene();}},5000);

  let benchmark="segmentation";
  const configs={
    segmentation:{title:["Pixel-level scene understanding","像素级场景理解"],summary:["DPT reaches 94.05% mIoU in the reported eleven-method comparison. Wall IoU exceeds 99% for every method, while track boundaries and adjacent rail regions remain more challenging.","正文中的十一方法对比中，DPT 达到 94.05% mIoU。各方法 Wall IoU 均超过 99%，但轨道边界及相邻轨道区域仍有差异。"],score:"94.05%",label:["DPT · reported mIoU","DPT · 论文报告 mIoU"],headers:["Method","Rail","Another_Rail","Wall","Human","Road","Ground","Pole","mIoU"],note:["Class IoU and mIoU in %. Values follow the supplied manuscript snapshot and its reported seven-class protocol.","类别 IoU 与 mIoU 单位为 %，数值和七类别评价口径沿用所提供论文快照。"]},
    detection:{title:["Objects across sensor configurations","不同传感器配置下的目标检测"],summary:["FocalsConv reports 46.83% mAP among the listed fusion methods. High Human AP coexists with lower AP for compact railway facilities; aggregate scores alone do not describe all categories.","已报告的融合方法中，FocalsConv 的 mAP 为 46.83%。较高的 Human AP 与轨道设施较低的 AP 并存，整体均值不能代替类别分析。"],score:"46.83%",label:["FocalsConv · reported mAP","FocalsConv · 论文报告 mAP"],headers:["Method","Input","RedLight","Human","OtherInfoPlate","DistancePlate","YellowInfoPlate","GreenLight","mAP"],note:["AP / mAP in %. Planar center-distance thresholds: 0.5, 1, 2, 4 m. This is not IoU-matched AP. — means not reported, not zero. Bold values mark per-input-group column maxima.","AP / mAP 单位为 %；平面中心距离匹配阈值为 0.5、1、2、4 m，并非 IoU 匹配 AP。— 为未报告，不是零；加粗表示同输入组内各列最高值。"]},
    distance:{title:["Performance along the forward axis","沿前向纵深的性能变化"],summary:["Performance varies with distance and sensor configuration. DSVT reports 39.11% mAP in the 100–150 m group; FocalsConv reports 3.07% in the same group. These are current-protocol results, not guaranteed operating distances.","结果随前向距离与传感器配置变化。100–150 m 组中，DSVT mAP 为 39.11%，FocalsConv 为 3.07%。这描述当前协议下的结果，不代表保证的工作距离。"],score:"4",label:["forward-distance groups","前向距离分组"],headers:["Method","0–50 m","50–100 m","100–150 m","150–200 m"],note:["Forward y, not radial distance. mAP is averaged over classes with GT in each range; class composition can differ. Endpoint and filtering conventions follow the manuscript. — means not reported.","按前向 y 坐标分组，不是径向距离。各组仅对有 GT 的类别求 mAP，类别构成可能不同；端点与筛选规则沿用论文协议。— 表示未报告。"]}
  };
  function modality(row,index){return benchmark==="detection"?row.values[0]:benchmark==="distance"?(index<7?"Camera":index<12?"LiDAR":"Camera+LiDAR"):"all";}
  function renderBenchmark(){const c=configs[benchmark],rows=D.tables[benchmark];
    $$("[data-benchmark]").forEach(b=>{const selected=b.dataset.benchmark===benchmark;b.setAttribute("aria-selected",String(selected));b.tabIndex=selected?0:-1;});
    $("#benchmark-panel").setAttribute("aria-labelledby","tab-"+benchmark);
    $("#benchmark-summary").innerHTML=`<div><h3>${L(...c.title)}</h3><p>${L(...c.summary)}</p></div><div class="score-callout"><strong>${c.score}</strong><span>${L(...c.label)}</span></div>`;
    let last="";const body=rows.map((r,i)=>{const group=modality(r,i),first=last!==""&&last!==group;last=group;
      const values=r.values.map((v,j)=>{if(v===null)return '<td class="missing" aria-label="Not reported">—</td>';if(typeof v!=="number")return `<td class="group-label">${esc(v.replace("Camera+LiDAR","Camera + LiDAR"))}</td>`;const peers=rows.filter((p,k)=>modality(p,k)===group).map(p=>p.values[j]).filter(x=>typeof x==="number");return `<td${v===Math.max(...peers)?' class="best"':""}>${v.toFixed(2)}</td>`;}).join("");return `<tr${first?' class="modality-start"':""}><th scope="row">${esc(r.method)}</th>${values}</tr>`;}).join("");
    $("#results-table").innerHTML=`<caption class="sr-only">${L(...c.title)}</caption><thead><tr>${c.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${body}</tbody>`;
    $("#table-note").textContent=L(...c.note);$("#csv-download").href=`data/${benchmark}_results.csv`;const src=`assets/paper/${benchmark}_results.webp`;$("#table-image").src=src;$("#table-image").alt=L(...c.title)+" · manuscript table";$("#table-image-button").dataset.lightbox=src;$("#table-image-button").dataset.title=L(...c.title);
  }
  $$("[data-benchmark]").forEach(b=>b.addEventListener("click",()=>{benchmark=b.dataset.benchmark;renderBenchmark();}));
  $(".tabs").addEventListener("keydown",e=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;e.preventDefault();const keys=Object.keys(configs);let i=keys.indexOf(benchmark);i=e.key==="Home"?0:e.key==="End"?keys.length-1:(i+(e.key==="ArrowRight"?1:-1)+keys.length)%keys.length;benchmark=keys[i];renderBenchmark();$("#tab-"+benchmark).focus();});
  function renderKey(){$("#key-example").innerHTML=D.keyExample.cells.map(c=>`<figure>${imageButton(c.src,`${c.method} · 97.87 m DistancePlate`)}<figcaption>${esc(c.method==="Focals"?"FocalsConv":c.method)}${c.method==="TransFusion"?L(" · miss retained"," · 保留漏检"):""}</figcaption></figure>`).join("");}

  let gallery="scenes",sceneFilter="all",detFilter="camera";
  const groupNames={camera:["Camera-only","纯视觉"],fusion:["Camera–LiDAR fusion","相机—点云融合"],lidar:["LiDAR-only","纯点云"]};
  const palette=[["Rail","#ff0000"],["Another_Rail","#ff8f00"],["Wall","#00cc00"],["Human","#8e24aa"],["Road","#0d47a1"],["Ground","#ffd600"],["Pole","#87cefa"]];
  function compareRow(r,kind){const title=kind==="segmentation"?tags(r):`${L(...groupNames[r.group])} · ${r.target||L("selected facilities","精选设施")}${Number.isFinite(r.forwardY)?` · y ≈ ${r.forwardY.toFixed(1)} m`:""}`;return `<article class="compare-row"><div class="compare-title"><p>${esc(title)}</p><p class="mono">${esc(r.frame)}</p></div><div class="comparison-grid" style="--columns:${r.cells.length}">${r.cells.map(c=>`<figure><figcaption>${esc(c.method)}</figcaption>${imageButton(c.src,`${c.method} · ${r.frame}`)}</figure>`).join("")}</div></article>`;}
  function renderGallery(){
    $$("[data-gallery]").forEach(b=>{b.classList.toggle("active",b.dataset.gallery===gallery);b.setAttribute("aria-pressed",String(b.dataset.gallery===gallery));});const controls=$("#gallery-controls"),content=$("#gallery-content");
    if(gallery==="scenes"){
      controls.innerHTML=[["all",L("All attributes","全部属性")],["environment",L("Environment","环境")],["illumination",L("Illumination","光照")],["track-layout",L("Track layout","轨道形态")]].map(([k,v])=>`<button type="button" data-scene-filter="${k}" class="${sceneFilter===k?"active":""}" aria-pressed="${sceneFilter===k}">${v}</button>`).join("");const items=D.scenes.filter(s=>sceneFilter==="all"||s.group===sceneFilter);
      content.innerHTML=`<div class="scene-grid">${items.map(s=>`<figure>${imageButton(s.src,`${L(s.title,s.titleZh)} · ${s.id}`,'width="1280" height="720"')}<figcaption><strong>${esc(L(s.title,s.titleZh))}</strong><span class="mono">${esc(s.id)}</span><div class="attribute-line">${esc(tags(s))}</div></figcaption></figure>`).join("")}</div>`;$("#gallery-count").textContent=L(`${items.length} selected frames`,`${items.length} 张精选原图`);
    }else if(gallery==="segmentation"){
      controls.innerHTML=`<div class="legend">${palette.map(([c,color])=>`<span><i style="background:${color}"></i>${c}</span>`).join("")}</div>`;content.innerHTML=D.segmentation.map(r=>compareRow(r,gallery)).join("");$("#gallery-count").textContent=L("6 scenes · GT + 5 methods · 36 images","6 个场景 · GT + 5 种方法 · 36 张图");
    }else{controls.innerHTML=Object.entries(groupNames).map(([k,v])=>`<button type="button" data-det-filter="${k}" class="${detFilter===k?"active":""}" aria-pressed="${detFilter===k}">${L(...v)}</button>`).join("");content.innerHTML=D.detection.filter(r=>r.group===detFilter).map(r=>compareRow(r,gallery)).join("");$("#gallery-count").textContent=L("3 scenes per input · GT + 3 methods · 36 images total","每类输入 3 个场景 · GT + 3 种方法 · 共 36 张图");}
  }
  $$("[data-gallery]").forEach(b=>b.addEventListener("click",()=>{gallery=b.dataset.gallery;renderGallery();}));
  $("#gallery-controls").addEventListener("click",e=>{const s=e.target.closest("[data-scene-filter]"),d=e.target.closest("[data-det-filter]");if(s){sceneFilter=s.dataset.sceneFilter;renderGallery();}if(d){detFilter=d.dataset.detFilter;renderGallery();}});

  let videoFilter="all",videoSpeed=3,videosPaused=reduced.matches;
  const activeVideos=new Set();let observer;
  function playVisible(v){if(!v.src){v.src=v.dataset.src;v.load();}v.muted=true;v.defaultMuted=true;v.defaultPlaybackRate=videoSpeed;v.playbackRate=videoSpeed;if(!videosPaused&&!document.hidden){const promise=v.play();if(promise)promise.catch(()=>{v.dataset.autoplayBlocked="true";});}}
  function renderVideos(){
    if(observer)observer.disconnect();$$("#video-grid video").forEach(v=>v.pause());activeVideos.clear();
    const items=videos.filter(v=>videoFilter==="all"||(videoFilter==="detection"?v.kind!=="segmentation":v.kind==="segmentation"));
    $("#video-grid").innerHTML=items.map(v=>`<article class="video-card"><video data-src="${esc(v.src)}" poster="${esc(v.poster)}" muted loop playsinline controls preload="none" ${videosPaused?"":"autoplay"} aria-label="${esc(L(v.title,v.titleZh))}"></video><div class="video-badges"><h3>${esc(L(v.title,v.titleZh))}</h3><span>${videoSpeed}× · ${v.kind==="segmentation"?"Seg":v.kind==="fusion"?"Fusion":"LiDAR"}</span></div><p>${esc(v.sequence)} · ${L("native prediction export","原生预测可视化")}</p></article>`).join("");
    $$("[data-video-filter]").forEach(b=>{b.classList.toggle("active",b.dataset.videoFilter===videoFilter);b.setAttribute("aria-pressed",String(b.dataset.videoFilter===videoFilter));});$("#video-toggle").textContent=videosPaused?L("Play videos","播放视频"):L("Pause videos","暂停视频");
    if("IntersectionObserver" in window){observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){activeVideos.add(e.target);playVisible(e.target);}else{activeVideos.delete(e.target);e.target.pause();}}),{threshold:.15});$$("#video-grid video").forEach(v=>{v.addEventListener("loadedmetadata",()=>{v.playbackRate=videoSpeed;});observer.observe(v);});}else{$$("#video-grid video").forEach(v=>{activeVideos.add(v);playVisible(v);});}
  }
  $$("[data-video-filter]").forEach(b=>b.addEventListener("click",()=>{videoFilter=b.dataset.videoFilter;renderVideos();}));
  $("#video-speed").addEventListener("change",e=>{videoSpeed=Number(e.target.value);$$("#video-grid video").forEach(v=>{v.defaultPlaybackRate=videoSpeed;v.playbackRate=videoSpeed;});$$(".video-badges span").forEach(b=>b.textContent=b.textContent.replace(/^[13]×/,videoSpeed+"×"));});
  $("#video-toggle").addEventListener("click",()=>{videosPaused=!videosPaused;activeVideos.forEach(v=>{if(videosPaused)v.pause();else playVisible(v);});$("#video-toggle").textContent=videosPaused?L("Play videos","播放视频"):L("Pause videos","暂停视频");});
  document.addEventListener("visibilitychange",()=>{if(document.hidden)$$("#video-grid video").forEach(v=>v.pause());else activeVideos.forEach(playVisible);});
  reduced.addEventListener("change",e=>{if(e.matches){scenePaused=true;videosPaused=true;renderScene();renderVideos();}});

  const dialog=$("#lightbox");
  document.addEventListener("click",e=>{const b=e.target.closest("[data-lightbox]");if(!b)return;const src=b.dataset.lightbox;$("#lightbox-image").src=src;$("#lightbox-image").alt=b.dataset.title||"Visualization";$("#lightbox-title").textContent=b.dataset.title||"Visualization";$("#lightbox-original").href=src;if(typeof dialog.showModal==="function"){dialog.showModal();document.body.classList.add("modal-open");}else window.open(src,"_blank","noopener");});
  $("#lightbox-close").addEventListener("click",()=>dialog.close());dialog.addEventListener("close",()=>document.body.classList.remove("modal-open"));
  dialog.addEventListener("click",e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
  function applyLanguage(){document.documentElement.lang=lang==="zh"?"zh-CN":"en";originals.forEach((html,e)=>{e.innerHTML=lang==="zh"?(zh[e.dataset.i18n]||html):html;});$("#language").innerHTML=lang==="zh"?'EN <span aria-hidden="true">↗</span>':'中文 <span aria-hidden="true">↗</span>';$("#language").setAttribute("aria-label",lang==="zh"?"Switch to English":"切换为中文");renderScene();renderBenchmark();renderKey();renderGallery();renderVideos();}
  $("#language").addEventListener("click",()=>{lang=lang==="en"?"zh":"en";try{localStorage.setItem("railscenes-language",lang);}catch(_){}applyLanguage();});
  applyLanguage();
})();
