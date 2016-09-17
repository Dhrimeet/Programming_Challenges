function swap(a) {
  console.log(a);
  count = Math.ceil((a.length)/2);
  temp = (a.length)-1;
  for (i=0; i<=count-1; i++) {
    if((a[i]!=".")||(a[i]!=",")) {
     b = a[i];
     a[i] = a[temp];
     a[temp] = b;
     temp --;
     }
   }
  return a;
 }

function myfunction() {
  before = document.getElementById("line").value;
  before = before.split(" ");
  intermediate = swap(before).join("");
  intermediate = intermediate.split(" ");
  after = swap(intermediate).join(" ");
  document.write (after);
 }
  /*var before = before.split("");
  var num = before.length;
  var count = Math.ceil(num/2)-1;
  console.log (count);
  var temp = num-1;
  for (i=0; i<=count; i++) {
  var a = before[i];
  before[i] = before[temp];
  before[temp] = a;
  console.log (i,temp);
  temp --;
   }
  var intermediate = before.join("");
  var intermediate = intermediate.split(" ");
  var num = intermediate.length;
  var count = Math.ceil(num/2)-1;
  console.log (count);
  var temp = num-1;
  for (i=0; i<=count; i++) {
  var a = intermediate[i];
  intermediate[i] = intermediate[temp];
  intermediate[temp] = a;
  console.log (i,temp);
  temp --;
  }
  var after = intermediate.join(" ");
  document.write (after);*/
