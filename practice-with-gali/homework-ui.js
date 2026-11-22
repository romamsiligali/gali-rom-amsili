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
 var originals=Array.isArray(l.sheet)?l.sheet:[];
 var a=originals.concat(bank.a||[]);
 var b=bank.b||[];
 return {a,b};
}
sheet=function(l){
 var pages=getHomeworks(l);
 var current="a";
 function storageKey(i){return "homework:"+l.name+":"+current+":"+i}
 function render(){
  var questions=pages[current];
  var title=current==="a"?"דף 1 | תרגול וביסוס":"דף 2 | יישום ואתגר";
  var h="<div class='hw-picker noprint'><h2>משימות לבית</h2><p>בחרו דף אחד, קראו את ההוראות וענו בקצב שלכם. שני הדפים שונים זה מזה.</p>";
  h+="<div class='hw-buttons'><button id='hwA' class='"+(current==="a"?"active":"")+"'>דף 1 · "+pages.a.length+" משימות</button>";
  h+="<button id='hwB' class='"+(current==="b"?"active":"")+"'>דף 2 · "+pages.b.length+" משימות</button></div>";
  h+="<p class='note'>אפשר להקליד כאן או להדפיס. התשובות נשמרות בדפדפן שבמכשיר זה בלבד, ואינן נשלחות אוטומטית למורה.</p></div>";
  h+="<article class='hw-page'><h2>תרגול עם גלי</h2><p class='hw-subject'>"+safeText(l.name)+"</p><h3>"+title+"</h3>";
  h+="<div class='hw-identity'><span>שם: ________________________</span><span>תאריך: ______________</span></div>";
  h+="<p class='hw-instructions'><strong>הוראות:</strong> קראו את כל המשימות. כתבו תשובות מלאות, והסבירו כשמבקשים מכם לנמק. זמן עבודה משוער: 25 עד 35 דקות, בהתאם לקצב שלכם.</p>";
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
   out.push({subject:s.name,lesson:l.name,numberOfWorksheets:2,foundation:w.a.length,application:w.b.length,minimum:Math.min(w.a.length,w.b.length)});
 })));
 return out;
};
})();