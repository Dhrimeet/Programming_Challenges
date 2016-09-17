function myfunction() {
var num = Number(document.getElementById("year").value);
var count=0;
 do {
    num++;
    if (num%400==0) {
    document.write (num+"<br>");
    count++;
     }
    else if ((num%100!=0)&&(num%4==0)) {
    document.write (num+"<br>");
    count++;
     }
  }
  while (count<100)
 }
