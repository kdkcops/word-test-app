/* 중등수능 단어 테스트 (안드로이드 앱판)
   - 기본 Day 06~10 + 사진으로 직접 추가한 테스트
   - 모든 기록은 이 폰에만 저장(로그인 없음). 백업 파일로 옮길 수 있음 */
const DAYS = [
 {d:6,t:"기분, 감정",start:151,w:`emotion|감정
nervous|긴장한, 불안해하는
lonely|외로운
excited|흥분한, 신이 난
awesome|굉장한, 아주 멋진
awful|끔찍한, 지독한
anxious|걱정하는; 열망하는
mad|미친; 화가 난
surprised|놀란
amaze|놀라게 하다
pity|연민, 동정
sympathy|동정(심); 공감
miss|그리워하다; 놓치다
silly|바보 같은, 우스꽝스러운
depressed|우울한, 의기소침한
thankful|감사하는
apologize|사과하다
frustrate|좌절시키다
upset|화가 난 / 속상하게 하다
annoy|짜증나게 하다; 귀찮게 하다
terrible|무서운, 끔찍한, 지독한
disappointed|실망한, 낙담한
regret|후회하다 / 후회; 유감
shocking|충격적인
ashamed|부끄러워하는
bother|괴롭히다, 귀찮게 하다
embarrass|당황하게 하다
horrible|무서운, 끔찍한
scary|무서운, 겁나는
delight|(큰) 기쁨 / 매우 기쁘게 하다`},
 {d:7,t:"생각, 사고",start:181,w:`express|표현하다 / 급행의
intend|의도하다
desire|욕구, 갈망 / 바라다
consider|고려하다; (~로) 여기다
deny|부인하다, 부정하다
allow|허락하다, 허용하다
doubt|의심 / 의심하다
respect|존경하다; 존중하다 / 존경; 존중
anticipate|예상하다, 기대하다
compare|비교하다
guess|추측하다 / 추측
suppose|추측하다; 가정하다
remind|생각나게 하다, 상기시키다
belief|믿음, 신뢰
unbelievable|믿을 수 없는, 믿기 어려운
realize|깨닫다; 실현하다
decide|결정하다, 결심하다
confuse|혼란시키다; 혼동하다
imagine|상상하다
contrast|대조, 차이 / 대조하다
hesitate|주저하다, 망설이다
concentrate|집중하다
quickly|빨리, 신속히
rapid|빠른, 신속한
narrow|좁은; 편협한
reason|이유; 이성
concern|걱정; 관심 / 걱정하다
argue|말다툼하다; 주장하다
conclusion|결론, 결말
attract|끌어들이다; (마음을) 끌다`},
 {d:8,t:"의사소통",start:211,w:`greet|인사하다, 맞이하다
communicate|의사소통하다
introduce|소개하다; 도입하다
speech|연설; 말
avoid|피하다; 막다
react|반응하다
language|언어, 말
discuss|논의하다, 토론하다
mention|언급하다, 말하다 / 언급
advise|충고하다, 조언하다
conversation|대화
chat|수다를 떨다 / 수다, 잡담
reply|대답하다 / 대답
nod|(고개를) 끄덕이다 / 끄덕임
bow|(고개 숙여) 인사하다, 절하다 / 절; 활
accept|받아들이다
disagree|동의하지 않다, 의견이 다르다
mind|마음, 정신 / 신경쓰다
negative|부정적인; 음성의
gesture|몸짓, 제스처
object|반대하다 / 물건; 목적
trust|신뢰하다, 믿다 / 신뢰
respond|대답하다; 반응하다
suggest|제안하다
encourage|용기를 북돋우다, 장려하다
repeat|반복하다 / 반복
whisper|속삭이다 / 속삭임
praise|칭찬하다 / 칭찬
beg|간청하다; 구걸하다
pretend|~인 체하다`},
 {d:9,t:"장소, 건물",start:241,w:`field|들판; 분야; 현장; 경기장
station|역; 정거장; (관공)서; 방송국
factory|공장
site|장소; 현장; (인터넷) 사이트
spot|장소; 반점
downtown|도심의 / 도심에 / 번화가
indoor|실내의
lawn|잔디(밭)
yard|마당, 뜰
pasture|초원, 목초지
orchard|과수원
port|항구, 항만
drugstore|약국
cafeteria|구내식당
shelter|피난처; 보호 시설
booth|작은 공간, 부스
fountain|분수
castle|성(城), 성곽
address|주소 / 연설하다
structure|구조; 건축물
roof|지붕
stair|계단
elevator|승강기, 엘리베이터
chimney|굴뚝
entrance|입구; 입장; 입학
ceiling|천장
basement|지하실, 지하(층)
garage|차고
brick|벽돌
construct|건설하다`},
 {d:10,t:"음식, 요리, 식당",start:271,w:`noodle|국수, 면
seafood|해산물
pepper|후추; 고추
meal|식사, 끼니
diet|식사; 식단; 식습관
flavor|맛, 풍미
appetizer|애피타이저, 식욕을 돋우는 것
dessert|디저트, 후식
chew|씹다
swallow|삼키다
bite|한 입; 물린 상처 / 물다
recipe|요리법, 레시피
plate|접시
ingredient|재료, 성분
slice|(얇게 썬) 조각 / (얇게) 썰다
fry|튀기다
pot|(깊은) 냄비; 단지
pan|(얕은) 냄비, 팬
chef|요리사, 주방장
mix|섞다, 혼합하다 / 혼합(물)
boil|끓다, 끓이다
pour|붓다, 따르다; (비가) 쏟아지다
peel|(껍질을) 벗기다 / 껍질
bowl|(우묵한) 그릇
jar|병; 단지
flour|밀가루, (곡물) 가루
spoonful|한 숟가락
wipe|닦다
serve|(음식을) 제공하다, (식사) 시중을 들다
straw|빨대; 짚`}
];

// ---------- storage (이 폰에만 저장) ----------
const S={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let history=S.get("vt_history",[]);      // [{date,label,first,total,rounds}]
let wrongBook=S.get("vt_wrong",{});       // id -> count
let selected=S.get("vt_sel",[6]);
let custom=S.get("vt_custom",[]);         // [{id,t,created,items:[{w,k}]}]
let autoSpeak=S.get("vt_auto",true);
function persist(){S.set("vt_history",history.slice(0,300));S.set("vt_wrong",wrongBook)}
function saveCustom(){S.set("vt_custom",custom)}

// ---------- 단어 목록 ----------
let WORDS={};
function buildWords(){
  WORDS={};
  DAYS.forEach(D=>{D.items=D.w.trim().split("\n").map((l,i)=>{const [w,k]=l.split("|");const id=String(D.start+i).padStart(4,"0");WORDS[id]={id,day:D.d,src:"Day "+String(D.d).padStart(2,"0"),w:w.trim(),k:k.trim()};return id})});
  custom.forEach(C=>{C.ids=C.items.map((it,i)=>{const id=C.id+"_"+i;WORDS[id]={id,day:C.id,src:C.t,w:it.w,k:it.k};return id})});
  // 지워진 테스트의 오답은 정리
  Object.keys(wrongBook).forEach(id=>{if(!WORDS[id])delete wrongBook[id]});
}
buildWords();

// ---------- 발음 ----------
const NATIVE=window.Android||null;
let actx=null,curSrc=null;const bufs={};
function ctx(){try{if(!actx){const C=window.AudioContext||window.webkitAudioContext;if(C)actx=new C()}if(actx&&actx.state==="suspended")actx.resume()}catch(e){}return actx}
function unlockAudio(){const c=ctx();if(!c)return;try{const b=c.createBuffer(1,1,22050);const s=c.createBufferSource();s.buffer=b;s.connect(c.destination);s.start(0)}catch(e){}}
function b64bytes(w){const s=atob(AUDIO[w]);const u=new Uint8Array(s.length);for(let i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u}
function loadAudio(w){
  if(bufs[w])return bufs[w];
  if(!window.AUDIO||!AUDIO[w])return Promise.reject(new Error("no-clip"));
  bufs[w]=new Promise((res,rej)=>{const c=ctx();if(!c)return rej(new Error("no-webaudio"));
    const p=c.decodeAudioData(b64bytes(w).buffer,res,rej);if(p&&p.then)p.then(res,rej)}).catch(e=>{delete bufs[w];throw e});
  return bufs[w];
}
function speakDevice(t){
  if(NATIVE&&NATIVE.speak){try{NATIVE.speak(t);return true}catch(e){}}
  try{const s=window.speechSynthesis;if(!s)return false;s.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="en-US";u.rate=0.85;s.speak(u);return true}catch(e){return false}
}
async function speak(w){
  if(window.AUDIO&&AUDIO[w]){
    try{const c=ctx();if(!c)throw 0;const b=await loadAudio(w);if(c.state!=="running")await c.resume();
      if(curSrc)try{curSrc.stop()}catch(e){}
      const s=c.createBufferSource();s.buffer=b;s.connect(c.destination);s.start(0);curSrc=s;return}catch(e){}
  }
  speakDevice(w);
}

// ---------- 채점 ----------
const norm=s=>s.replace(/[\s~.·'"!?]/g,"").toLowerCase();
function variants(k){
  const out=new Set();
  k.split(/[,;/]/).forEach(p=>{p=p.trim();if(!p)return;
    out.add(norm(p.replace(/\([^)]*\)/g,"")));out.add(norm(p.replace(/[()]/g,"")));
    out.add(norm(p.replace(/\(([^)]*)\)/g,"")).replace(/[()]/g,""));});
  out.delete("");return [...out];
}
function isCorrect(ans,k){
  const vs=variants(k);const whole=norm(ans.replace(/[,;/()]/g,""));if(!whole)return false;
  const pieces=[whole,...ans.split(/[,;/\s]+/).map(p=>norm(p.replace(/[()]/g,""))).filter(Boolean)];
  const match=a=>vs.some(v=>a===v||(a.length>=2&&v.startsWith(a)&&v.length-a.length<=2)||(v.length>=2&&a.startsWith(v)&&a.length-v.length<=2));
  return pieces.some(match)||vs.some(v=>v.length>=2&&whole.includes(v));
}

// ---------- 퀴즈 ----------
let Q=null;
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
function startQuiz(ids,label){
  if(!ids.length)return;
  unlockAudio();ids.forEach(id=>{if(window.AUDIO&&AUDIO[WORDS[id].w])loadAudio(WORDS[id].w).catch(()=>{})});
  Q={label,ids,queue:shuffle(ids),idx:0,round:1,firstCorrect:0,firstTotal:ids.length,wrongThisRound:[],firstWrong:[],state:"ask",last:null};
  view="quiz";renderQuiz();
}
function submit(){
  const inp=document.getElementById("ans");const val=inp.value.trim();if(!val){inp.focus();return}
  const id=Q.queue[Q.idx];const ok=isCorrect(val,WORDS[id].k);
  Q.last={id,val,ok};Q.state="fb";
  if(!ok){Q.wrongThisRound.push(id);if(Q.round===1){Q.firstWrong.push(id);wrongBook[id]=(wrongBook[id]||0)+1;persist()}}
  else if(Q.round===1)Q.firstCorrect++;
  renderQuiz();
}
function override(){
  const id=Q.last.id;Q.wrongThisRound=Q.wrongThisRound.filter(x=>x!==id);
  if(Q.round===1){Q.firstCorrect++;Q.firstWrong=Q.firstWrong.filter(x=>x!==id);wrongBook[id]=(wrongBook[id]||1)-1;if(wrongBook[id]<=0)delete wrongBook[id];persist()}
  Q.last.ok=true;Q.last.overridden=true;renderQuiz();
}
function next(){
  Q.idx++;Q.state="ask";
  if(Q.idx>=Q.queue.length){
    if(Q.wrongThisRound.length){Q.queue=shuffle(Q.wrongThisRound);Q.wrongThisRound=[];Q.idx=0;Q.round++}
    else return finish();
  }
  renderQuiz();
}
function finish(){
  const rec={date:new Date().toISOString(),label:Q.label,first:Q.firstCorrect,total:Q.firstTotal,rounds:Q.round};
  history.unshift(rec);persist();Q.state="done";view="result";renderResult(rec);
}

// ---------- 화면 ----------
const app=document.getElementById("app");
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmtDate=iso=>{const d=new Date(iso);return `${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`};
let view="home",tab="history",confirmClear=null,confirmDel=null;
function toast(t){let el=document.getElementById("toast");if(!el){el=document.createElement("div");el.id="toast";el.className="toast";document.body.appendChild(el)}el.textContent=t;el.hidden=false;clearTimeout(toast._t);toast._t=setTimeout(()=>el.hidden=true,2200)}
function labelOf(sel){return sel.map(s=>typeof s==="number"?"Day "+String(s).padStart(2,"0"):(custom.find(c=>c.id===s)||{}).t).filter(Boolean).join(", ")}
function idsOf(sel){return [...DAYS.filter(D=>sel.includes(D.d)).flatMap(D=>D.items),...custom.filter(C=>sel.includes(C.id)).flatMap(C=>C.ids)]}

function renderHome(){
  Q=null;view="home";
  selected=selected.filter(s=>typeof s==="number"?DAYS.some(D=>D.d===s):custom.some(C=>C.id===s));
  const wrongIds=Object.keys(wrongBook).sort((a,b)=>wrongBook[b]-wrongBook[a]||a.localeCompare(b));
  const ids=idsOf(selected);
  app.innerHTML=`
  <header><h1>중등수능 실력 단어 테스트</h1><p class="sub">범위를 고르면 그 안에서 무작위로 뜻을 물어봅니다. 틀린 단어는 다 맞을 때까지 다시 나와요.</p></header>
  <section><h2>기본 단어장</h2>
    <div class="days">${DAYS.map(D=>`<label class="day"><input type="checkbox" data-s="${D.d}" ${selected.includes(D.d)?"checked":""}><b>Day ${String(D.d).padStart(2,"0")}</b><span>${D.t}</span><small>${D.items.length}개</small></label>`).join("")}</div>
  </section>
  <section><div class="sechead"><h2>내가 추가한 테스트</h2></div>
    ${custom.length?`<div class="days">${custom.map(C=>`<div class="day custom"><label class="cl"><input type="checkbox" data-s="${esc(C.id)}" ${selected.includes(C.id)?"checked":""}><b class="ct">${esc(C.t)}</b><small>${C.items.length}개</small></label>
      ${confirmDel===C.id?`<span class="confirm">삭제할까요? <button class="small danger" data-delyes="${esc(C.id)}">삭제</button><button class="small" data-delno="1">취소</button></span>`:`<span class="acts"><button class="small" data-edit="${esc(C.id)}">수정</button><button class="small danger" data-del="${esc(C.id)}">삭제</button></span>`}</div>`).join("")}</div>`
      :`<div class="list"><div class="empty">아직 없어요. 단어장 페이지를 찍으면 영어 단어와 뜻을 읽어서 새 테스트로 만들어 드려요.</div></div>`}
    <button class="camera" id="add">📷 사진으로 테스트 추가</button>
  </section>
  <div class="row sticky"><button class="primary grow" id="go" ${ids.length?"":"disabled"}>${ids.length?ids.length+"단어 테스트 시작":"범위를 골라 주세요"}</button></div>
  <section>
    <div class="tabs" role="tablist"><button role="tab" id="t-history" aria-selected="${tab==="history"}">회차별 점수</button><button role="tab" id="t-wrong" aria-selected="${tab==="wrong"}">오답 노트 ${wrongIds.length?`(${wrongIds.length})`:""}</button><button role="tab" id="t-backup" aria-selected="${tab==="backup"}">백업</button></div>
    ${tab==="history"?historyView():tab==="wrong"?wrongView(wrongIds):backupView()}
  </section>`;
  app.querySelectorAll("input[data-s]").forEach(c=>c.onchange=()=>{selected=[...app.querySelectorAll("input[data-s]:checked")].map(x=>/^\d+$/.test(x.dataset.s)?+x.dataset.s:x.dataset.s);S.set("vt_sel",selected);renderHome()});
  document.getElementById("go").onclick=()=>startQuiz(idsOf(selected),labelOf(selected));
  document.getElementById("add").onclick=()=>openEditor(null);
  ["history","wrong","backup"].forEach(t=>document.getElementById("t-"+t).onclick=()=>{tab=t;confirmClear=null;renderHome()});
  const g=document.getElementById("wgo");if(g)g.onclick=()=>startQuiz(wrongIds,"오답 노트");
  app.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>openEditor(b.dataset.edit));
  app.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{confirmDel=b.dataset.del;renderHome()});
  app.querySelectorAll("[data-delno]").forEach(b=>b.onclick=()=>{confirmDel=null;renderHome()});
  app.querySelectorAll("[data-delyes]").forEach(b=>b.onclick=()=>{custom=custom.filter(c=>c.id!==b.dataset.delyes);saveCustom();buildWords();persist();confirmDel=null;toast("테스트를 삭제했어요");renderHome()});
  app.querySelectorAll("[data-wdel]").forEach(b=>b.onclick=()=>{delete wrongBook[b.dataset.wdel];persist();renderHome()});
  const c=document.getElementById("clr");if(c)c.onclick=()=>{confirmClear=tab;renderHome()};
  const y=document.getElementById("yes");if(y)y.onclick=()=>{if(confirmClear==="history")history=[];else wrongBook={};persist();confirmClear=null;renderHome()};
  const n=document.getElementById("no");if(n)n.onclick=()=>{confirmClear=null;renderHome()};
  const bs=document.getElementById("bsave");if(bs)bs.onclick=saveBackup;
  const bl=document.getElementById("bload");if(bl)bl.onclick=()=>{if(NATIVE&&NATIVE.pickBackup)NATIVE.pickBackup();else toast("앱에서만 쓸 수 있어요")};
}
function clearBar(what){
  return confirmClear?`<div class="confirm">${what}을(를) 모두 지울까요? <button class="small danger" id="yes">지우기</button><button class="small" id="no">취소</button></div>`:`<div class="row"><button class="small danger" id="clr">${what} 전체 삭제</button></div>`;
}
function historyView(){
  if(!history.length)return `<div class="list"><div class="empty">아직 기록이 없어요. 첫 테스트를 끝내면 첫 회독 점수가 여기 쌓입니다.</div></div>`;
  return `<div class="list">${history.map((h,i)=>`<div class="li"><span class="k">${history.length-i}회 · ${fmtDate(h.date)}<br>${esc(h.label)}${h.rounds>1?` · ${h.rounds}라운드`:""}</span><span class="s">${h.first}/${h.total}</span><span class="n" style="color:var(--accent)">${Math.round(h.first/h.total*100)}점</span></div>`).join("")}</div>${clearBar("점수 기록")}`;
}
function wrongView(ids){
  if(!ids.length)return `<div class="list"><div class="empty">틀린 단어가 없어요. 첫 회독에서 틀린 단어가 자동으로 모입니다.</div></div>`;
  return `<div class="row"><button class="primary grow" id="wgo">오답 ${ids.length}개만 테스트</button></div>
  <div class="list">${ids.map(id=>{const o=WORDS[id];return `<div class="li"><span class="w">${esc(o.w)}</span><span class="k">${esc(o.k)}</span><span class="n">${wrongBook[id]}회 틀림</span><button class="small x" data-wdel="${esc(id)}" aria-label="오답에서 빼기">✕</button></div>`}).join("")}</div>${clearBar("오답 노트")}`;
}
function backupView(){
  return `<div class="list"><div class="empty" style="text-align:left">기록과 추가한 테스트는 이 폰에만 저장돼요. 앱을 지우거나 폰을 바꾸기 전에 백업 파일을 저장해 두세요. 저장한 파일은 '다운로드' 폴더에 생깁니다.</div></div>
  <div class="row"><button class="grow" id="bsave">백업 파일 저장</button><button class="grow" id="bload">백업 불러오기</button></div>`;
}
function saveBackup(){
  const data=JSON.stringify({app:"vocab-test",v:1,saved:new Date().toISOString(),history,wrong:wrongBook,custom:custom.map(({id,t,created,items})=>({id,t,created,items})),sel:selected});
  const d=new Date(),name=`단어테스트_백업_${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}.json`;
  if(NATIVE&&NATIVE.saveFile){const r=NATIVE.saveFile(name,data);toast(r==="ok"?"다운로드 폴더에 저장했어요":"저장하지 못했어요: "+r)}
  else toast("앱에서만 쓸 수 있어요");
}
window.onBackup=function(text){
  try{const d=JSON.parse(text);if(d.app!=="vocab-test")throw new Error("형식");
    const ids=new Set(custom.map(c=>c.id));(d.custom||[]).forEach(c=>{if(!ids.has(c.id))custom.push(c)});
    const m={};[...(d.history||[]),...history].forEach(h=>{if(h&&h.date)m[h.date]=h});history=Object.values(m).sort((a,b)=>b.date.localeCompare(a.date));
    Object.entries(d.wrong||{}).forEach(([k,v])=>{wrongBook[k]=Math.max(wrongBook[k]||0,v)});
    saveCustom();buildWords();persist();toast("백업을 불러왔어요");renderHome();
  }catch(e){toast("백업 파일을 읽지 못했어요")}
};

function renderQuiz(){
  const id=Q.queue[Q.idx],o=WORDS[id];const pct=Math.round(Q.idx/Q.queue.length*100);
  let body;
  if(Q.state==="ask"){
    body=`<input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="뜻을 한글로 입력" aria-label="뜻 입력"><button class="primary" id="sub">확인</button>`;
  }else{
    const L=Q.last;
    body=`<div class="fb ${L.ok?"ok":"no"}"><strong>${L.ok?(L.overridden?"정답으로 처리했어요":"정답!"):"틀렸어요"}</strong><span class="m">${esc(o.k)}</span>${L.ok&&!L.overridden?"":`<span class="yours">내 답: ${esc(L.val)}</span>`}</div>
    <div class="row">${L.ok?"":`<button id="ovr">맞은 걸로 하기</button>`}<button class="primary grow" id="nx">다음</button></div>`;
  }
  app.innerHTML=`
  <div class="top"><span><span class="pill ${Q.round>1?"review":""}">${Q.round===1?"1회독":"오답 재시험 "+(Q.round-1)}</span> ${esc(Q.label)}</span><span style="font-variant-numeric:tabular-nums">${Q.idx+1} / ${Q.queue.length}</span></div>
  <div class="bar"><i style="width:${pct}%"></i></div>
  <div class="card"><div class="code">${esc(o.src)}</div><div class="word">${esc(o.w)}</div>
  <div class="spkrow"><button class="spk" id="spk" aria-label="발음 듣기"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4z"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/></svg>발음 듣기</button>
  <label class="auto"><input type="checkbox" id="autospk" ${autoSpeak?"checked":""}>문제마다 자동으로 읽기</label></div>${body}</div>
  <div class="row"><button class="small" id="quit">그만하고 처음으로</button>${Q.round===1?`<span class="sub" style="align-self:center">지금까지 ${Q.firstCorrect}개 맞음</span>`:""}</div>`;
  document.getElementById("quit").onclick=()=>{try{if(curSrc)curSrc.stop()}catch(e){}renderHome()};
  document.getElementById("spk").onclick=()=>{unlockAudio();speak(o.w);const a=document.getElementById("ans");if(a)a.focus()};
  document.getElementById("autospk").onchange=e=>{autoSpeak=e.target.checked;S.set("vt_auto",autoSpeak)};
  if(Q.state==="ask"&&autoSpeak)speak(o.w);
  if(Q.state==="ask"){
    const inp=document.getElementById("ans");inp.focus();
    inp.onkeydown=e=>{if(e.key==="Enter"&&!e.isComposing){e.preventDefault();submit()}};
    document.getElementById("sub").onclick=submit;
  }else{
    const nx=document.getElementById("nx");nx.onclick=next;nx.focus();
    const ov=document.getElementById("ovr");if(ov)ov.onclick=override;
  }
}
function renderResult(rec){
  const pct=Math.round(rec.first/rec.total*100);const wrong=Q.firstWrong;
  app.innerHTML=`
  <div class="card center"><h2>첫 회독 점수</h2><div class="score"><b>${pct}</b><span>점</span></div>
    <p class="sub">${rec.total}개 중 ${rec.first}개 정답 · ${esc(rec.label)}<br>${rec.rounds>1?`오답 재시험 ${rec.rounds-1}번 만에 모두 맞혔어요.`:"한 번에 전부 맞혔어요."}</p></div>
  <section><h2>처음에 틀린 단어 ${wrong.length}개</h2>
    ${wrong.length?`<div class="list">${wrong.map(id=>`<div class="li"><span class="w">${esc(WORDS[id].w)}</span><span class="k">${esc(WORDS[id].k)}</span></div>`).join("")}</div><p class="sub">오답 노트에 저장했어요.</p>`:`<div class="list"><div class="empty">틀린 단어 없음</div></div>`}
  </section>
  <div class="row"><button class="primary grow" id="again">같은 범위 다시 시작</button><button class="grow" id="home">처음으로</button></div>`;
  const ids=Q.ids,label=Q.label;
  document.getElementById("again").onclick=()=>startQuiz(ids,label);
  document.getElementById("home").onclick=()=>{tab="history";renderHome()};
}

// ---------- 사진으로 테스트 추가 / 수정 ----------
// 편집 중인 내용은 카메라를 다녀오는 동안 앱이 다시 시작돼도 남도록 저장
let ED=S.get("vt_draft",null); // {editId,t,rows:[{w,k}],busy}
function saveDraft(){S.set("vt_draft",ED)}
function nextTitle(){const d=new Date();let n=custom.length+1;while(custom.some(c=>c.t==="내 단어 "+n))n++;return `내 단어 ${n} (${d.getMonth()+1}/${d.getDate()})`}
function openEditor(editId){
  if(editId){const C=custom.find(c=>c.id===editId);ED={editId,t:C.t,rows:C.items.map(x=>({...x}))}}
  else if(!(ED&&!ED.editId&&ED.rows.length))ED={editId:null,t:nextTitle(),rows:[]};
  saveDraft();renderEditor();
}
function readRows(){
  if(view!=="editor"||!ED)return;
  const t=document.getElementById("etitle");if(t)ED.t=t.value;
  ED.rows=[...app.querySelectorAll(".erow")].map(r=>({w:r.querySelector(".ew").value,k:r.querySelector(".ek").value}));
  saveDraft();
}
function renderEditor(msg){
  view="editor";
  const n=ED.rows.filter(r=>r.w.trim()&&r.k.trim()).length;
  app.innerHTML=`
  <header><h1>${ED.editId?"테스트 수정":"사진으로 테스트 추가"}</h1><p class="sub">영어 단어와 한글 뜻이 함께 인쇄된 단어장 페이지를 찍어 주세요. 여러 장을 차례로 추가할 수 있어요.</p></header>
  <div class="row"><button class="camera grow" id="cam">📷 사진 찍기</button><button class="camera grow" id="gal">🖼 앨범에서 고르기</button></div>
  <div class="status" id="status" ${msg?"":"hidden"}>${esc(msg||"")}</div>
  <label class="field">테스트 이름<input id="etitle" value="${esc(ED.t)}" maxlength="30"></label>
  <section><div class="sechead"><h2>읽은 단어 ${ED.rows.length}개</h2><span class="sub">틀린 글자는 눌러서 고치세요</span></div>
    ${ED.rows.length?`<div class="erows">${ED.rows.map((r,i)=>`<div class="erow"><input class="ew" value="${esc(r.w)}" placeholder="영어" autocapitalize="off" spellcheck="false" aria-label="영어 단어"><input class="ek" value="${esc(r.k)}" placeholder="뜻" aria-label="뜻"><button class="small x" data-rm="${i}" aria-label="이 줄 빼기">✕</button></div>`).join("")}</div>`
      :`<div class="list"><div class="empty">사진을 올리면 여기에 단어와 뜻이 정리돼요.</div></div>`}
    <div class="row"><button class="small" id="addrow">+ 직접 한 줄 추가</button>${ED.rows.length?`<button class="small danger" id="clrrows">모두 비우기</button>`:""}</div>
  </section>
  <div class="row sticky"><button class="grow" id="cancel">취소</button><button class="primary grow" id="save" ${n?"":"disabled"}>${n?n+"단어로 저장":"단어가 없어요"}</button></div>`;
  const pick=kind=>{readRows();if(!NATIVE){toast("앱에서만 쓸 수 있어요");return}
    ED.busy=true;saveDraft();setStatus("사진을 기다리는 중…");kind==="cam"?NATIVE.takePhoto():NATIVE.pickPhoto()};
  document.getElementById("cam").onclick=()=>pick("cam");
  document.getElementById("gal").onclick=()=>pick("gal");
  document.getElementById("addrow").onclick=()=>{readRows();ED.rows.push({w:"",k:""});saveDraft();renderEditor();const ws=app.querySelectorAll(".ew");if(ws.length)ws[ws.length-1].focus()};
  const cr=document.getElementById("clrrows");if(cr)cr.onclick=()=>{readRows();ED.rows=[];saveDraft();renderEditor()};
  app.querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>{readRows();ED.rows.splice(+b.dataset.rm,1);saveDraft();renderEditor()});
  app.querySelectorAll(".erow input,#etitle").forEach(i=>i.oninput=()=>{readRows();const n2=ED.rows.filter(r=>r.w.trim()&&r.k.trim()).length;const sb=document.getElementById("save");sb.disabled=!n2;sb.textContent=n2?n2+"단어로 저장":"단어가 없어요"});
  document.getElementById("cancel").onclick=()=>{ED=null;saveDraft();renderHome()};
  document.getElementById("save").onclick=saveEditor;
}
function setStatus(t){const el=document.getElementById("status");if(el){el.textContent=t;el.hidden=!t}}
function saveEditor(){
  readRows();
  const items=ED.rows.map(r=>({w:r.w.trim(),k:r.k.trim()})).filter(r=>r.w&&r.k);
  if(!items.length)return;
  const t=(ED.t||"").trim()||nextTitle();
  if(ED.editId){const C=custom.find(c=>c.id===ED.editId);C.t=t;C.items=items;
    Object.keys(wrongBook).forEach(id=>{if(id.startsWith(C.id+"_"))delete wrongBook[id]});}
  else{const id="c"+Date.now().toString(36);custom.push({id,t,created:new Date().toISOString(),items});selected=[...selected,id];S.set("vt_sel",selected)}
  saveCustom();buildWords();persist();
  const was=!!ED.editId;ED=null;saveDraft();toast(was?"수정했어요":`'${t}' 테스트를 만들었어요`);tab="history";renderHome();
}
// 앱(안드로이드)에서 사진 글자 인식 결과를 넘겨줌
window.onOcr=function(res){
  if(!ED){ED={editId:null,t:nextTitle(),rows:[]}}
  ED.busy=false;
  if(view!=="editor")renderEditor();else readRows();
  if(!res||res.error){saveDraft();renderEditor(res&&res.error==="cancel"?"":"사진을 읽지 못했어요. 다시 찍어 주세요."+(res&&res.error&&res.error!=="cancel"?" ("+res.error+")":""));return}
  const found=parseOcrLines(res.lines||[],res.w||0);
  const have=new Set(ED.rows.map(r=>r.w.trim().toLowerCase()));
  const add=found.filter(f=>!have.has(f.w.toLowerCase()));
  ED.rows=[...ED.rows.filter(r=>r.w.trim()||r.k.trim()),...add];
  saveDraft();
  renderEditor(add.length?`${add.length}개를 읽었어요. 틀린 글자가 없는지 확인해 주세요.`:(found.length?"새로운 단어가 없어요 (이미 목록에 있음).":"단어를 찾지 못했어요. 글자가 크게 나오도록 가까이에서 똑바로 찍어 주세요."));
};
window.onOcrProgress=function(t){setStatus(t)};

// 뒤로 가기 버튼: 처리했으면 true
window.appBack=function(){
  if(view==="home")return false;
  if(view==="editor"){readRows();renderHome();return true}
  if(view==="quiz"){try{if(curSrc)curSrc.stop()}catch(e){}renderHome();return true}
  renderHome();return true;
};

// 시작: 사진 고르던 중에 앱이 다시 시작됐으면 편집 화면으로 복귀
if(ED&&ED.busy){renderEditor("사진을 읽는 중…")}else renderHome();
if(NATIVE&&NATIVE.ready)NATIVE.ready();
