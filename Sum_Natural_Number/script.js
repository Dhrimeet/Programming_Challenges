function myfunction ()
{
var num=prompt("Please enter a possitive integer");
var sum=0;
var i=0;
if (num>0) {
 for(i=0;i<num;i++) {
     sum=sum+i;
     }
document.write (sum);
   }
else document.write ("Please be positive!!!")
}
