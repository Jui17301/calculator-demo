function displayResult(value) {
  const display=document.getElementById("result");
  
  display.value=display.value+value;
 }
 
 function calculate() {
   var result = document.getElementById("result").value;
   var answer = eval(result);
   document.getElementById("result").value = answer;
 }
 function calculatePercentage(){
 
   const display=document.getElementById("result");
  display.value=display.value/100;
 
 }
 
 function clearResult() {
   document.getElementById("result").value = "";
 }
 