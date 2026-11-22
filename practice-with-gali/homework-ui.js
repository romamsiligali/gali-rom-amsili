/* שני דפי עבודה מלאים בכל שיעור, הדפסה ומענה עצמאי */
(function(){
"use strict";
var previousLesson=lesson;
lesson=function(s,l){
 previousLesson(s,l);
 var worksheetButton=document.getElementById("worksheet");
 if(worksheetButton)worksheetButton.textContent="📝 דפי עבודה לבית";
};
function getHomeworks(l){
 var bank=(typeof MORE_HOMEWORK!=="undefined"&&MORE_HOMEWORK[l.name])||{a:[],b:[]};
 var supplemental=(typeof HOMEWORK_SUPPLEMENTS!=="undefined"&&HOMEWORK_SUPPLEMENTS[l.name])||[];
 var a=(bank.a||[]).concat(supplemental).slice(0,Math.max(8,(bank.a||[]).length));
 var b=(bank.b||[]).slice();
 return {a,b};
}
sheet=function(l){
 var pages=getHomeworks(l);
 var current="a";
 function storageKey(i){return "homework:v2:"+l.name+":"+current+":"+i}
 function render(){
  var questions=pages[current];
  var title=current==="a"?"דף 1 | תרגול וביסוס":"דף 2 | המשך והעמקה";
  var h="<div class='hw-picker noprint'><h2>משימות לבית</h2><p>התחילו בדף 1 כדי לתרגל את היסודות. לאחר מכן המשיכו לדף 2, שבו משימות חדשות ליישום, חשיבה והעמקה. בכל דף שאלות שונות.</p>";
  h+="<div class='hw-buttons'><button id='hwA' class='"+(current==="a"?"active":"")+"'>דף 1: יסודות · "+pages.a.length+" משימות</button>";
  h+="<button id='hwB' class='"+(current==="b"?"active":"")+"'>דף 2: העמקה · "+pages.b.length+" משימות</button></div>";
  h+="<p class='note'>אפשר להקליד כאן או להדפיס. התשובות נשמרות במכשיר זה בלבד. עד שנחבר טופס הגשה מוסדי, יש לשמור את הדף כ-PDF ולשלוח לפי הנחיות המורה.</p></div>";
  h+="<article class='hw-page'><h2>תרגול עם גלי</h2><p class='hw-subject'>"+safeText(l.name)+"</p><h3>"+title+"</h3>";
  h+="<div class='hw-identity'><span>שם: ________________________</span><span>תאריך: ______________</span></div>";
  h+="<p class='hw-instructions'><strong>הוראות:</strong> קראו את כל המשימות. כתבו תשובות מלאות, והסבירו כשמבקשים מכם לנמק. זמן עבודה משתנה לפי השאלות והקצב שלכם. אם המורה ביקשה את שני הדפים, בצעו תחילה את דף 1 ואחריו את דף 2.</p>";
  h+="<ol class='hw-questions'>";
  questions.forEach((question,i)=>{
    h+="<li><div class='hw-question-text'>"+safeText(question)+"</div>";
    h+="<textarea class='hw-answer noprint' data-i='"+i+"' rows='3' aria-label='תשובה למשימה "+(i+1)+"' placeholder='כתבו כאן תשובה...'></textarea>";
    h+="<div class='hw-print-answer' data-typed='"+i+"'></div><div class='hw-lines'></div></li>";
  });
  h+="</ol><div class='hw-footer'>בדקו: האם עניתם על כל סעיפי השאלה? האם נימקתם כשנדרשת הנמקה?</div></article>";
  h+="<div class='hw-bottom noprint'><button class='big blue' id='hwPrint' style='font-size:1.18rem;padding:14px'>🖨️ הדפיסו או שמרו כ-PDF</button>";
  h+="<p class='note'>בחלון ההדפסה ניתן לבחור ״שמירה כ-PDF״. אם כתבתם כאן, התשובות יופיעו גם בהדפסה.</p></div>";
  show(h,"דפי עבודה");
  document.getElementById("hwA").onclick=()=>{if(current!=="a"){current="a";render()}};
  document.getElementById("hwB").onclick=()=>{if(current!=="b"){current="b";render()}};
  document.getElementById("hwPrint").onclick=()=>window.print();
  var fields=app.querySelectorAll(".hw-answer");
  fields.forEach(field=>{
    var i=+field.dataset.i,stored=load(storageKey(i))||"",typed=app.querySelector("[data-typed='"+i+"']");
    field.value=stored;
    if(typed)typed.textContent=stored;
    field.addEventListener("input",()=>{
      save(storageKey(i),field.value);
      if(typed)typed.textContent=field.value;
    });
  });
 }
 render();
};
/* משוב למורה בלבד, ללא הופעה באפליקציה */
window.PRacticeHomeworkQuality=function(){
 var out=[];
 SUBJECTS.filter(s=>s.topics.length).forEach(s=>s.topics.forEach(t=>t.lessons.forEach(l=>{
   var w=getHomeworks(l);
   out.push({subject:s.name,lesson:l.name,numberOfWorksheets:2,foundation:w.a.length,deepening:w.b.length,minimum:Math.min(w.a.length,w.b.length)});
 })));
 return out;
};
})();