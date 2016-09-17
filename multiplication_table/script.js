function myfunction() {
var i=1;
var mul=0;
var num= document.getElementById('num').value;
if (num>0) {
   for (i=1;i<=12;i++) {
     mul=num*i;
     document.write(num+"x"+i+"="+mul+"<br>");
    }
 }
else {
  document.write ("Please enter a number greater than 0");
 }
}
