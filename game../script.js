var count1=0;
var count2=0;
function random(){
var num2=Math.floor((Math.random() * 100) + 1);
return num2;
}
function myfunction(){
var num=document.getElementById("num").value;
  if (num===random()){
    count1 ++;
    document.getElementById("writeTo").innerHTML = "Bulls Eye!!"+"<br>";
    document.getElementById("writeTo").innerHTML += "SUCCESSFULL ATTEMPTS" + " = " + count1 + "<br>";
    //  document.write("Bulls Eye!!");
   }
  else {
    count2 ++;
    document.getElementById("writeTo").innerHTML = "Better luck next time!!" + "<br>";
    document.getElementById("writeTo").innerHTML += "FAILED ATTEMPTS" + " = " + count2 + "<br>";
  // document.write("Better Luck next time");
   }
   document.getElementById("writeTo").innerHTML += "Total Attempts" + " = " + (count1 + count2) + "<br>";
 }
