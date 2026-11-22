/* ===== קוד האפליקציה ===== */
var app=document.getElementById("app"),ttl=document.getElementById("ttl"),stack=[],S={};
function save(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function load(k){try{return localStorage.getItem(k)}catch(e){return null}}
function el(h){var d=document.createElement("div");d.innerHTML=h;return d}
function go(fn,t){stack.push({fn:fn,t:t});fn();ttl.textContent=t;window.scrollTo(0,0)}
function show(h,t){app.innerHTML=h;ttl.textContent=t||"תרגול עם גלי"}
document.getElementById("home").onclick=function(){stack=[];home()};
document.getElementById("back").onclick=function(){stack.pop();var p=stack[stack.length-1];if(p){p.fn()}else{home()}};
function home(){
 var h="<h2>בחרו מקצוע</h2><div class=grid>";
 SUBJECTS.forEach(function(s,i){var n=s.topics.length;h+="<button class='card "+s.color+(n?"":" soon")+"' data-i='"+i+"'>"+s.name+"<small>"+(n?"":"בקרוב")+"</small></button>"});
 show(h+"</div>");
 app.querySelectorAll(".card").forEach(function(b){b.onclick=function(){var s=SUBJECTS[b.dataset.i];if(s.topics.length)go(function(){subject(s)},s.name)}});
}
function subject(s){
 var h="<h2>"+s.name+"</h2>";
 s.topics.forEach(function(t,ti){h+="<div class=panel><b>"+t.name+"</b>";t.lessons.forEach(function(l,li){h+="<button class='opt' data-t='"+ti+"' data-l='"+li+"'>"+l.name+(l.sources&&l.sources.length?" <span class='movie-mark' aria-label='כולל קישור לסרטון נבחר'>🎬 סרטון נבחר</span>":"")+"</button>"});h+="</div>"});
 show(h,s.name);
 app.querySelectorAll(".opt").forEach(function(b){b.onclick=function(){var l=s.topics[b.dataset.t].lessons[b.dataset.l];go(function(){lesson(s,l)},l.name)}});
}
function lesson(s,l){
 var key="stars:"+l.name,st=load(key)||"0";
 var opening="<h2>"+l.name+"</h2><div class=stars>הכוכבים שלי: "+st+"</div>";
 if(l.sources&&l.sources.length){
  var r=l.sources[0];
  opening+="<section class='panel video-preview' aria-label='סרטון נבחר לשיעור'><h3 style='margin:0 0 6px'>🎬 הסרטון שנבחר לשיעור</h3><p style='font-weight:700;margin:6px 0'>"+safeText(r.title)+"</p>";
  opening+="<p class='note' style='text-align:right;margin:6px 0'>"+safeText(r.provider)+"</p>";
  opening+="<a class='watch-link' href='"+safeText(r.url)+"' target='_blank' rel='noopener noreferrer' aria-label='פתחו את הסרטון באתר המקור: "+safeText(r.title)+"'>▶ פותחים סרטון באתר המקור</a>";
  opening+="<p style='font-size:0.9rem;margin:12px 0 0'><strong>שאלת צפייה:</strong> "+safeText(r.prompt)+"</p>";
  if(l.sources.length>1)opening+="<p class='note' style='text-align:right'>יש מקור נוסף במסך 'סרטונים נוספים'.</p>";
  opening+="</section>";
 }
 var menu="<button class='big red' id=w>"+(l.reading?"לומדים":l.sources&&l.sources.length?"🎬 סרטונים ומקורות נוספים":"צפייה")+"</button><button class='big green' id=p>תרגול</button><button class='big blue' id=s>דף עבודה</button><button class='big purple' id=c>כרטיסיות</button>";
 show(opening+menu,l.name);
 document.getElementById("w").onclick=function(){go(function(){if(l.reading){readLesson(l)}else{watch(l)}},l.reading?"לומדים":"צפייה")};
 document.getElementById("p").onclick=function(){go(function(){quiz(l)},"תרגול")};
 document.getElementById("s").onclick=function(){go(function(){sheet(l)},"דף עבודה")};
 document.getElementById("c").onclick=function(){go(function(){cards(l)},"כרטיסיות")};
}
function safeText(t){return String(t||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function readLesson(l){
 var h="<h2>מכירים את המושגים</h2>";
 l.reading.forEach(function(r){
  h+="<div class='panel'><h3 style='margin-top:0'>"+safeText(r[0])+"</h3><p>"+safeText(r[1])+"</p><p class='note' style='text-align:right'>"+safeText(r[2])+"</p></div>";
 });
 h+="<div class='panel note'>קראו את ההגדרות והדוגמאות, וחזרו למסך השיעור כדי לתרגל.</div>";
 show(h,"לומדים");
}
function watch(l){
 var h="<h2>צופים ומבינים</h2>";
 if(l.sources && l.sources.length){
  h+="<div class='panel'><p class='note'>הסרטונים נבחרו ממקורות מדעיים מקצועיים. כל קישור פותח אתר חיצוני בלשונית חדשה. בסיום חוזרים לכאן ובוחרים ‘תרגול’.</p></div>";
  l.sources.forEach(function(r,j){
   h+="<div class='panel'><h3 style='margin:0 0 6px'>"+safeText(r.title)+"</h3>";
   h+="<p class='note' style='text-align:right'>"+safeText(r.provider)+"</p>";
   h+="<p>"+safeText(r.note)+"</p>";
   h+="<a class='big red' style='text-decoration:none;text-align:center;display:block;font-size:1.15rem;padding:15px 10px' href='"+safeText(r.url)+"' target='_blank' rel='noopener noreferrer'>"+(j===0?'לפתיחת הסרטון באתר המקור':'לפתיחת מקור נוסף')+"</a>";
   h+="<p><strong>שאלת צפייה:</strong> "+safeText(r.prompt)+"</p></div>";
  });
  h+="<div class='panel note'>לאחר הצפייה לחצו על ‘חזרה’ ובחרו ‘תרגול’ כדי לבדוק מה הבנתם.</div>";
 }else if(l.video){h+="<iframe class=video src='"+safeText(l.video)+"' allowfullscreen title='סרטון הסבר'></iframe><p class=note>אם הסרטון לא נטען, <a href='"+safeText(l.video)+"' target='_blank' rel='noopener noreferrer'>לחצו כאן לצפייה</a></p>"}
 else{var u='https://www.youtube.com/results?search_query='+encodeURIComponent(l.search||l.name);h+="<div class=panel><p class=note>לשיעור זה עדיין לא נבחר סרטון בדוק.<br>אפשר לחפש סרטון הסבר מתאים:</p><a class='big red' style='text-decoration:none;text-align:center' href='"+u+"' target='_blank' rel='noopener noreferrer'>חיפוש סרטון ביוטיוב</a></div>"}
 show(h,"צפייה");
}
function quiz(l){
 var i=0,sc=0,Q=l.quiz;
 function step(){
  if(i>=Q.length){var old=+(load("stars:"+l.name)||0);if(sc>old)save("stars:"+l.name,sc);
   show("<div class=panel><h2>סיימת!</h2><p class=stars style='font-size:1.5rem'>"+sc+" תשובות נכונות מתוך "+Q.length+"</p><button class='big green' id=again>עוד פעם</button></div>","תרגול");
   document.getElementById("again").onclick=function(){i=0;sc=0;step()};return}
  var q=Q[i],h="<p class=note>שאלה "+(i+1)+" מתוך "+Q.length+"</p><div class=panel><p class=q>"+q.q+"</p>";
  q.o.forEach(function(o,k){h+="<button class=opt data-k='"+k+"'>"+o+"</button>"});
  show(h+"</div><div id=fb class=stars></div>","תרגול");
  var done=false;
  app.querySelectorAll(".opt").forEach(function(b){b.onclick=function(){
   if(done)return;done=true;var k=+b.dataset.k;
   if(k===q.a){b.classList.add("ok");sc++;document.getElementById("fb").textContent="נכון, כל הכבוד!"}
   else{b.classList.add("no");app.querySelectorAll(".opt")[q.a].classList.add("ok");document.getElementById("fb").textContent="כמעט. התשובה הנכונה מסומנת בירוק."}
   setTimeout(function(){i++;step()},1400)}});
 }
 step();
}
function sheet(l){
 var h="<h2>דף עבודה</h2><div class=panel><ol class=ws>";
 l.sheet.forEach(function(t){h+="<li>"+t+"<br><span class=line>&nbsp;</span></li>"});
 show(h+"</ol></div><button class='big blue noprint' onclick='window.print()'>הדפסה</button>","דף עבודה");
}
function cards(l){
 var i=0,C=l.cards;
 function step(){
  var c=C[i];
  show("<p class=note>כרטיס "+(i+1)+" מתוך "+C.length+"</p><div class=flip id=f tabindex=0 role=button aria-label='הפכו את הכרטיס'><div class=flipin><div class='face c1'>"+c[0]+"</div><div class='face back c4'>"+c[1]+"</div></div></div><div class=row><button id=nx>הבא</button><button id=pv>הקודם</button></div>","כרטיסיות");
  var f=document.getElementById("f");
  f.onclick=function(){f.classList.toggle("on")};
  f.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();f.classList.toggle("on")}};
  document.getElementById("nx").onclick=function(){i=(i+1)%C.length;step()};
  document.getElementById("pv").onclick=function(){i=(i-1+C.length)%C.length;step()};
 }
 step();
}
home();
