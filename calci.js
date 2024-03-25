
var val=document.getElementById("in");
function solve(v) {
  val.value+=v;
 }
 function cancel(){
  if(val.value=="undefined"){
    val.value=" ";
  }
  val.value=val.value.substr(0,val.value.length-1);
 }
   
 function result() {
   val.value=eval(val.value);
 }
 
 function backspace(){
   val.value=" ";
   }
 
   
   