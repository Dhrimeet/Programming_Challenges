function shift(a,i){
  b=a.charAt(i)
  a=a.slice(1);
  a=a.concat(b);
  return a;
 }

function piglatin(a){
  a = before.split(" ");
  count = a.length;
  for(i=0;i<count;i++){
    b = shift(a[i],0);
    c = "ay";
    b = b.concat(c);
    a[i]=b;
  }
  return a;
 }

function myfunction(){
  before = document.getElementById("line").value;
  before = before.toLowerCase();
  before = piglatin(before);
  before = before.join(" ");
  document.write (before);
 }
