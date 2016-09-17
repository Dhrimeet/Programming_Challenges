function myfunction(){
var num=document.getElementById("num").value;
document.write ("Before" + " " + num + "<br>");
var temp2=num;
var temp1=0;
do {
  temp2=temp2/10;
  temp1 ++;
} while (temp2>1);
document.write ("After"+"<br>")
/*var nln=num.length;
var temp=nln;*/
nln=temp1;
var i=0;
for (i=1;i<temp1;i++){
   nln=nln-1;
   document.write (Math.floor(num/Math.pow(10,nln))+"<br>");
   num=num%(Math.pow(10,nln));
   console.log(num,nln);
 }
document.write (num);
}
