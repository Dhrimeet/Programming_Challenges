function myfunction(){
var num_in=document.getElementById("str").value;
var num_in=num_in.split(",");
size=num_in.length;
min = num_in[0];
c=0;
for (i=0; i<size; i++){
  if (num_in[i] < min){
     minimum=num_in[i];
     c=i;
     console.log(min)
  }
 }
document.write ("The minimum number in the array is = "+min+" "+"and the index of the minimum number is = "+c);
}
