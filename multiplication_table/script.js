function myfunction() {
var i=1;
var mul=0;
var num= document.getElementById('num').value;
if (num>0) {
   for (i=1;i<=12;i++) {
     mul=num*i;
     document.write("3*"+i+"=");
     document.write(mul);
     document.write("<br>");
    }
 }
else {
  document.write ("Please enter a number greater than 0");
 }
}
