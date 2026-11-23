/* קליטת ארבעת המקצועות, ממשק פשוט ומשוב עם הסבר */
var EXPLAIN={
'שם עצם, שם תואר ופועל':[
'״הילדה״ מציינת אדם ולכן היא שם עצם.','״הקטנה״ מתארת את הילדה ולכן היא שם תואר.','״רצה״ מציינת פעולה ולכן היא פועל.','״שולחן״ הוא שם של חפץ.','״מתוק״ מתאר תכונה ולכן הוא שם תואר.','״השחור״ מתאר את החתול.','״רץ״ הוא פועל המציין פעולה בזמן הווה.','״שאלו״ מתאר את פעולת התלמידים.'
],
'שבעת בנייני הפועל':[
'בעברית יש שבעה בניינים: פָּעַל, נִפְעַל, פִּעֵל, פֻּעַל, הִפְעִיל, הֻפְעַל והִתְפַּעֵל.','הפועל הִסְבִּיר בצורת ״הוא אתמול״ שייך לבניין הִפְעִיל.','הֻסְבַּר הוא פועל סביל בבניין הֻפְעַל.','נִשְׁמַע בצורת ״הוא אתמול״ שייך לבניין נִפְעַל.','הִפְעִיל והֻפְעַל יוצרים זוג פעיל וסביל, למשל הִסְבִּיר והֻסְבַּר.','סֻכַּם הוא בניין פֻּעַל, שהוא סביל של פִּעֵל.','מחזירים את הפועל לצורת היסוד ״הוא אתמול״ ומזהים את התבנית.','נִכְתֹּב הוא פועל בעתיד בגוף ראשון רבים, והנ׳ מסמנת את הגוף. בצורת ״הוא אתמול״ נקבל כָּתַב, בניין פָּעַל.'
],
'עובדה ודעה':[
'עובדה היא טענה שאפשר לבדוק אם היא נכונה בעזרת ראיות.','דעה היא הערכה או עמדה, וגם דעה אפשר לנמק ולבסס.','״בשבוע יש שבעה ימים״ הוא מידע שאפשר לאמת.','״הכי חמודה״ הוא שיפוט אישי שאנשים יכולים לחלוק עליו.','״לדעתי״ ו״נראה לי״ מרמזות על דעה; תמיד בודקים גם את המשפט כולו.','סקר מתאים בכיתה יכול לברר מהי ההעדפה של רוב התלמידים.','״המקום הכי נעים״ היא דעה; את שעות הפתיחה אפשר לבדוק.','ברשת צריך לבדוק מי כתב, מה המקור ומה ההבדל בין מידע מבוסס לעמדת הכותב.'
],
'כתיבת פסקת עמדה':[
'פסקת עמדה כוללת טענה מרכזית, נימוקים, דוגמה וסיכום.','הטענה אומרת בבירור במה הכותב תומך.','נימוק הוא הסיבה שבגללה הטענה מוצדקת לדעת הכותב.','דוגמה ממחישה את הנימוק ומחזקת אותו.','״מכיוון ש״ מציגה קשר של סיבה או נימוק.','״אולם״ מסמנת ניגוד בין רעיונות.','״לדעתי כדאי...״ היא טענה ברורה שניתן לנמק.','טיעון נגדי מציגים באופן הוגן ומסבירים מדוע בכל זאת מעדיפים את הטענה שלנו.'
],
'מילות קישור: הוספה, ניגוד, ויתור ומסקנה':[
'״בנוסף״ משמשת להוספת רעיון או נימוק.','״נוסף על כך״ מוסיפה דוגמה או רעיון.','״אולם״ מסמנת ניגוד בין רעיונות.','״אף על פי ש״ מציגה ויתור: הפעולה קרתה למרות הנסיבות.','״לכן״ מראה תוצאה או מסקנה מן המשפט הקודם.','״לעומת זאת״ מסמנת ניגוד או השוואה מנוגדת.','בניגוד מציגים הבדל; בוויתור משהו מתרחש למרות סיבה שהייתה עשויה למנוע אותו.','״עם זאת״ מציג הסתייגות או רעיון מנוגד.'
],
'משפט פשוט, משפט מורכב ומשפט מחובר':[
'״התלמידים יצאו לחצר״ הוא משפט פשוט, ללא פסוקית תלויה.','במשפט מורכב יש משפט עיקרי ופסוקית אחת או יותר.','״כשנגמר השיעור״ היא פסוקית זמן התלויה במשפט העיקרי.','״המורה שמחה״ הוא המשפט העיקרי, וההמשך מוסיף תוכן תלוי.','״שקראתי״ היא פסוקית המתארת את הספר.','״דנה ושירה״ הוא נושא כולל, ואין כאן פסוקית או שני משפטים.','״מפני שירד גשם״ היא פסוקית סיבה.','במשפט מחובר שני איברים עצמאיים, בניגוד למשפט מורכב שבו יש פסוקית תלויה.'
],
'מילים נרדפות, הפכים, שורש, משפחת מילים, דימוי והאנשה':[
'״עליז״ קרובה במשמעות למילה ״שמח״, ולכן היא מילה נרדפת.','״גבוה״ ו״נמוך״ הן מילים שמשמעותן הפוכה.','ל־מ־ד הוא השורש של לימוד, לומד ולמידה.','״כתיבה״ חולקת עם ״כתב״ את השורש כ־ת־ב וקשר במשמעות.','״כמו קפיץ״ יוצר השוואה, ולכן זהו דימוי.','״השמש חייכה״ מייחסת פעולה אנושית לדבר שאינו אדם.','״כמו צמר״ היא השוואה ולא ייחוס פעולה אנושית.','משפחת מילים דורשת גם שורש משותף וגם קשר במשמעות; דמיון בצליל אינו מספיק.'
],
'חזרה: בעקבות האנרגיה':[
'אנרגיה היא גודל פיזיקלי שמאפשר תהליכים ושינויים.','הסוללה ממירה אנרגיה כימית לאנרגיה חשמלית.','הנורה ממירה אנרגיה חשמלית לאור וגם לאנרגיה תרמית.','אנרגיה עוברת או מומרת, ואינה נוצרת יש מאין ואינה נעלמת.','הרוח מתחדשת בתהליכים טבעיים ולכן היא מקור מתחדש.','גז טבעי הוא דלק מחצבי שמאגריו מוגבלים.','חום הוא אנרגיה שעוברת בין גופים עקב הבדל טמפרטורות.','תא סולרי ממיר אנרגיית קרינה לאנרגיה חשמלית.'
],
'חזרה: אנרגיית האור':[
'מקור אור פולט אור בעצמו, בניגוד לגוף שרק מחזיר אור.','נורה דולקת פולטת אור ולכן היא מקור אור.','הירח נראה מואר כי הוא מחזיר את אור השמש.','נייר אפייה מעביר אור אך מפזר אותו, ולכן הוא שקוף למחצה.','צל נוצר כאשר גוף חוסם את מסלול האור.','קש בכוס מים נראה שבור בגלל שבירת אור במעבר בין מים לאוויר.','מנסרה יכולה לפצל אור לבן לצבעיו עקב נפיצה.','אור מסוגל להתקדם גם בריק, ולכן אור השמש מגיע לכדור הארץ.'
],
'חזרה: אנרגיית הקול':[
'קול נוצר מתנודות של גוף.','קול זקוק לתווך חומרי ואינו מתקדם בריק.','תדר מודדים בהרץ: מספר התנודות בשנייה.','גובה הצליל תלוי בעיקר בתדר.','באותם תנאים משרעת גדולה יותר קשורה לעוצמת קול גדולה יותר.','הד הוא קול שהוחזר ממשטח ונשמע לאחר השהיה.','וילונות עבים יכולים לספוג חלק ניכר מאנרגיית הקול.','אולטרסאונד הוא קול בתדר שגבוה בדרך כלל מגבול השמיעה האנושי.'
],
'חזרה: אנרגיה חשמלית':[
'מעגל סגור מאפשר תנועת מטענים לאורך מסלול מוליך כאשר יש מקור מתח מתאים.','נחושת היא חומר מוליך חשמל.','ציפוי הפלסטיק מבודד את החוט ומסייע להגן על המשתמש.','מנוע חשמלי ממיר אנרגיה חשמלית בעיקר לאנרגיית תנועה.','מחולל ממיר אנרגיית תנועה לאנרגיה חשמלית.','ברק הוא פריקה חשמלית באטמוספרה.','אור מתקדם הרבה יותר מהר מקול באוויר, ולכן רואים ברק תחילה.','שפשוף בלון יכול להעביר מטענים וליצור תופעת חשמל סטטי.'
],
'חזרה מסכמת: כל הפרק':[
'אור וקול שונים באופן התפשטותם, אך שניהם מסוגלים להעביר אנרגיה.','האור מתקדם בריק; הקול זקוק לתווך חומרי.','בקומקום החשמל מומר בעיקר לאנרגיה תרמית המחממת את המים.','אות חשמלי מפעיל את הרמקול וגורם לממברנה לרטוט וליצור קול.','עוצמה קשורה למשרעת; גובה הצליל קשור לתדר.','טורבינה מסובבת מחולל לצורך הפקת אנרגיה חשמלית.','דוד שמש מחמם מים באמצעות אנרגיית הקרינה מן השמש.','בפנס האנרגיה הכימית מומרת לחשמל, ובהמשך לאור ולאנרגיה תרמית.'
]
};
/* מסך הבית: האיור המקורי שאושר עם אזורי לחיצה אמיתיים ונגישים. */
var ARTWORK_SUBJECTS=[
 {name:'מדעים',pos:'science'},
 {name:'שפה',pos:'hebrew'},
 {name:'היסטוריה',pos:'history'},
 {name:'תנ"ך',pos:'bible'},
 {name:'תקשורת',pos:'communication'},
 {name:'מורשת',pos:'heritage'}
];
var SUBJECT_ORDER=['שפה','מדעים','היסטוריה','תנ"ך','מורשת','תקשורת'];
function orderedSubjects(){
 return SUBJECTS.filter(s=>s.topics&&s.topics.length>0).sort((a,b)=>SUBJECT_ORDER.indexOf(a.name)-SUBJECT_ORDER.indexOf(b.name));
}
function assignmentHub(){
 var active=orderedSubjects();
 var h="<div class='assignment-hub'><h2>📝 משימות ותרגול</h2><p class='note'>בחרו מקצוע ושיעור כדי לפתוח דף עבודה. נושאים שטרם נלמדו מיועדים להכנה בלבד, ואין צורך להגיש אותם עד להנחיית המורה.</p>";
 active.forEach((s,si)=>{
  h+="<section class='panel'><h3 style='margin:0 0 12px'>"+safeText(s.name)+"</h3>";
  s.topics.forEach((t,ti)=>{
   h+="<p class='assignment-topic'>"+safeText(t.name)+"</p>";
   t.lessons.forEach((l,li)=>{
    var label=l.status==='upcoming'?' · טרם נלמד':l.status==='future'?' · בהמשך':'';
    h+="<button class='opt' data-s='"+si+"' data-t='"+ti+"' data-l='"+li+"' aria-label='דפי עבודה בנושא "+safeText(l.name)+label+"'>"+safeText(l.name)+(label?"<small class='assignment-status'>"+label+"</small>":"")+"</button>";
   });
  });
  h+="</section>";
 });
 h+="</div>";
 show(h,"משימות");
 app.querySelectorAll(".assignment-hub .opt").forEach(b=>{
  b.onclick=function(){
   var s=active[+b.dataset.s];
   var l=s.topics[+b.dataset.t].lessons[+b.dataset.l];
   go(function(){sheet(l)},"דפי עבודה");
  };
 });
}
home=function(){
 var active=orderedSubjects();
 var h="<div class='illustrated-home'>";
 h+="<img class='illustrated-image' src='./illustrated-home.png?v=20261122q' width='941' height='1672' alt='תרגול עם גלי. מסך הבית המאויר כולל שישה מקצועות ופעולות למשימות ולהגשות.' decoding='async' fetchpriority='high'>";
 ARTWORK_SUBJECTS.forEach((item,i)=>{
  if(!active.some(s=>s.name===item.name))return;
  h+="<button class='illustrated-hit art-"+item.pos+" art-subject' data-k='"+i+"' type='button' title='פתיחת "+safeText(item.name)+"' aria-label='פתיחת מקצוע "+safeText(item.name)+"'><span class='sr-only'>"+safeText(item.name)+"</span></button>";
 });
 h+="<button class='illustrated-hit art-practice' id='artPractice' type='button' title='משימות לתרגול עצמאי' aria-label='פתיחת משימות ותרגול עצמאי'></button>";
 h+="<button class='illustrated-hit art-tasks' id='artTasks' type='button' title='משימות' aria-label='בחירת משימות ודפי עבודה'></button>";
 h+="<a class='illustrated-hit art-submit' href='https://docs.google.com/forms/d/e/1FAIpQLSeJqbkwGLAefPJzrXW9K_KC2vYOq_Nbshb716q7SizA1OfLBA/viewform' target='_blank' rel='noopener noreferrer' title='הגשת עבודות למורה' aria-label='פתיחת טופס הגשת עבודות למורה'></a>";
 h+="<div class='illustrated-fallback' hidden><h2>בוחרים מקצוע</h2><div class='grid'>";
 ARTWORK_SUBJECTS.forEach((item,i)=>{
  if(active.some(s=>s.name===item.name))h+="<button class='card c"+i%5+" art-subject' type='button' data-k='"+i+"'>"+safeText(item.name)+"</button>";
 });
 h+="</div><button class='big blue' id='fallbackTasks'>📝 משימות לתרגול</button></div></div>";
 show(h);
 app.querySelectorAll(".art-subject").forEach(b=>{
  b.onclick=function(){
   var wanted=ARTWORK_SUBJECTS[+b.dataset.k];
   var s=active.find(x=>x.name===wanted.name);
   if(s)go(function(){subject(s)},s.name);
  };
 });
 document.getElementById('artPractice').onclick=()=>go(assignmentHub,"משימות");
 document.getElementById('artTasks').onclick=()=>go(assignmentHub,"משימות");
 var fb=document.getElementById('fallbackTasks');
 if(fb)fb.onclick=()=>go(assignmentHub,"משימות");
 var img=app.querySelector(".illustrated-image");
 if(img)img.addEventListener("error",()=>{
  var fallback=app.querySelector(".illustrated-fallback");
  if(fallback){fallback.hidden=false;img.style.display="none";app.classList.add("artwork-unavailable")}
 });
};
subject=function(s){
 var h="<h2>"+safeText(s.name)+"</h2><p class='note'>בחרו שיעור מתוך הנושאים</p>";
 s.topics.forEach((t,ti)=>{
  h+="<div class='panel'><h3 style='margin:0 0 8px'>"+safeText(t.name)+"</h3>";
  t.lessons.forEach((l,li)=>{
   var label=l.status==='upcoming'?'📚 השיעור הבא · טרם נלמד':l.status==='next'?'📖 שיעור חדש':l.status==='future'?'📖 בהמשך':l.status==='bridge'?'🌉 גשר קצר':'';
   h+="<button class='opt' data-t='"+ti+"' data-l='"+li+"'>"+safeText(l.name)+(label?"<small style='display:block;color:#7b58a4'>"+label+"</small>":"")+"</button>";
  });
  h+="</div>";
 });
 show(h,s.name);
 app.querySelectorAll(".opt").forEach(b=>{b.onclick=function(){var l=s.topics[+b.dataset.t].lessons[+b.dataset.l];go(function(){lesson(s,l)},l.name)}})
};
lesson=function(s,l){
 var st=load("stars:"+l.name)||"0";
 var h="<h2>"+safeText(l.name)+"</h2><div class='stars'>השיא האישי במכשיר הזה: "+st+" / "+l.quiz.length+"</div>";
 if(l.status==='upcoming')h+="<p class='panel' style='border:2px solid #e5ac45'><strong>השיעור הבא, טרם נלמד בכיתה.</strong> אפשר להכיר את הנושא ולהתכונן אליו.</p>";
 if(l.overview&&l.overview.length){
  h+="<div class='panel'><h3 style='margin:0 0 8px'>מה נלמד?</h3><ul style='padding-right:22px;margin:6px 0'>";
  l.overview.forEach(x=>h+="<li style='margin:5px 0'>"+safeText(x)+"</li>");h+="</ul>";
  if(s.name==='תנ"ך'&&l.name.includes("יהושע י׳")){
   h+="<details style='margin-top:10px'><summary style='font-weight:700;cursor:pointer'>🔎 תזכורת קצרה מתחילת ספר יהושע</summary><ul style='padding-right:22px'>";
   bibleReview.forEach(x=>h+="<li>"+safeText(x)+"</li>");h+="</ul></details>";
  }
  h+="</div>";
 }
 h+="<button class='big blue' id='learn'>📚 לומדים</button>";
 if(l.sources&&l.sources.length){var isViewing=l.sources.some(r=>r.kind==='video'||/סרטון|מצולם|מוקלט/.test(r.title+' '+r.provider));h+="<button class='big red' id='watch'>"+(isViewing?"▶ צפייה ומקורות":"📖 פסוקים ומקורות")+"</button>";}
 h+="<button class='big green' id='practice'>🎯 תרגול עם הסברים</button><button class='big purple' id='cards'>🗂️ כרטיסיות</button><button class='big blue' id='worksheet'>📝 דף עבודה</button>";
 show(h,l.name);
 document.getElementById("learn").onclick=()=>go(()=>readAny(l),"לומדים");
 var w=document.getElementById("watch");if(w)w.onclick=()=>go(()=>watch(l),"צפייה");
 document.getElementById("practice").onclick=()=>go(()=>quiz(l),"תרגול");
 document.getElementById("cards").onclick=()=>go(()=>cards(l),"כרטיסיות");
 document.getElementById("worksheet").onclick=()=>go(()=>sheet(l),"דף עבודה");
};
function readAny(l){
 var h="<h2>לומדים ומבינים</h2>";
 if(l.reading&&l.reading.length){l.reading.forEach(r=>h+="<div class='panel'><h3>"+safeText(r[0])+"</h3><p>"+safeText(r[1])+"</p><p class='note' style='text-align:right'>"+safeText(r[2])+"</p></div>");}
 else if(l.overview&&l.overview.length){h+="<div class='panel'><ul style='padding-right:22px'>"+l.overview.map(x=>"<li style='margin-bottom:10px'>"+safeText(x)+"</li>").join("")+"</ul></div>";}
 // מושגים שהוסברו ב"לומדים ומבינים" אינם חוזרים שוב באותו מסך.
 var isVocabularyLesson=l.name==='מילים נרדפות, הפכים, שורש, משפחת מילים, דימוי והאנשה';
 if(isVocabularyLesson){
  // במקום לחזור על שש ההגדרות, מוסיפים תרגול השוואתי אחד עם תשובה מוסתרת.
  h+="<section class='panel vocabulary-check'><h3>בוחנים את ההבנה</h3>";
  h+="<p>קראו את שני המשפטים: <strong>״העץ רקד ברוח״</strong> ו־<strong>״ענפי העץ התנופפו כמו דגלים״</strong>. מהו דימוי ומהי האנשה? הסבירו מה עזר לכם להבחין.</p>";
  h+="<details><summary>בדקו את עצמכם</summary><p>״העץ רקד ברוח״ הוא האנשה, כי לעץ מיוחסת פעולה אנושית. ״ענפי העץ התנופפו כמו דגלים״ הוא דימוי, כי הענפים מושווים לדגלים.</p></details></section>";
 }else{
  var alreadyDefined=(l.reading||[]).map(r=>String(r[0]||'').split(' (')[0].trim());
  var conceptCards=(l.cards||[]).filter(c=>!alreadyDefined.includes(String(c[0]||'').split(' (')[0].trim())).slice(0,7);
  if(conceptCards.length){
   h+="<h3>מושגים שכדאי להכיר</h3>";
   conceptCards.forEach(c=>h+="<div class='panel'><b>"+safeText(c[0])+"</b><p>"+safeText(c[1])+"</p></div>");
  }
 }
 h+="<div class='panel note'>אחרי הלמידה חזרו לשיעור ובחרו ״תרגול עם הסברים״.</div>";
 show(h,"לומדים");
}
watch=function(l){
 var isViewing=l.sources&&l.sources.some(r=>r.kind==='video'||/סרטון|מצולם|מוקלט/.test(r.title+' '+r.provider)); var h="<h2>"+(isViewing?"צופים ומבינים":"קוראים ומעמיקים")+"</h2><p class='note'>המקור ייפתח בלשונית נפרדת. חזרו לכאן כדי להמשיך ולתרגל.</p>";
 if(!l.sources||!l.sources.length){h+="<div class='panel'>לשיעור הזה אין כרגע סרטון מומלץ. אפשר ללמוד דרך ההסברים והכרטיסיות.</div>";}
 else l.sources.forEach(r=>{
  h+="<div class='panel'><h3>"+safeText(r.title)+"</h3><p class='note' style='text-align:right'>"+safeText(r.provider)+"</p>";
  h+="<p>"+safeText(r.note||"")+"</p><a class='watch-link' href='"+safeText(r.url)+"' target='_blank' rel='noopener noreferrer'>"+(r.kind==='reading'?"📖 קריאת המקור":"▶ פתיחת הסרטון או המקור")+"</a>";
  if(r.prompt)h+="<p><strong>לחשיבה:</strong> "+safeText(r.prompt)+"</p>";
  h+="</div>";
 });
 show(h,"צפייה");
};
quiz=function(l){
 var i=0,score=0,Q=l.quiz;
 function paint(){
  if(i>=Q.length){
   var old=+(load("stars:"+l.name)||0);if(score>old)save("stars:"+l.name,score);
   show("<div class='panel'><h2>סיימתם!</h2><p class='stars' style='font-size:1.5rem'>"+score+" מתוך "+Q.length+" תשובות נכונות</p><p>"+(score===Q.length?"כל השאלות נענו נכון. מעולה!":"אפשר לחזור לכרטיסיות ולנסות שוב. כך לומדים.")+"</p><button class='big green' id='again'>מתרגלים שוב</button></div>","תרגול");
   document.getElementById("again").onclick=()=>{i=0;score=0;paint()};return;
  }
  var q=Q[i],h="<p class='note'>שאלה "+(i+1)+" מתוך "+Q.length+"</p><div class='panel'><p class='q'>"+safeText(q.q)+"</p>";
  q.o.forEach((o,k)=>h+="<button class='opt' data-k='"+k+"'>"+safeText(o)+"</button>");
  h+="</div><div id='feedback' class='panel' style='display:none' aria-live='polite'></div>";
  show(h,"תרגול");
  var done=false;
  app.querySelectorAll(".opt").forEach(b=>b.onclick=function(){
   if(done)return;done=true;var k=+b.dataset.k;
   if(k===q.a){b.classList.add("ok");score++}
   else{b.classList.add("no");app.querySelectorAll(".opt")[q.a].classList.add("ok")}
   app.querySelectorAll(".opt").forEach(o=>o.disabled=true);
   var why=q.why||(EXPLAIN[l.name]&&EXPLAIN[l.name][i]);
   if(!why)why="התשובה הנכונה היא ״"+q.o[q.a]+"״. חזרו להסבר ולכרטיסיות כדי להבין את הסיבה.";
   var fb=document.getElementById("feedback");fb.style.display="block";
   fb.innerHTML="<h3 style='margin:0 0 8px'>"+(k===q.a?"✔ נכון!":"💡 לומדים מהטעות")+"</h3><p><strong>התשובה הנכונה:</strong> "+safeText(q.o[q.a])+"</p><p>"+safeText(why)+"</p><button class='big green' id='nextq' style='font-size:1.18rem;padding:16px'>"+(i+1===Q.length?"לסיכום":"לשאלה הבאה")+"</button>";
   document.getElementById("nextq").onclick=()=>{i++;paint()};
  });
 }
 paint();
};
home();
