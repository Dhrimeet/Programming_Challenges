function myfunction(){
var text=document.getElementById("sample").value;
var sln=text.length;
var temp=0;
var i=0;
    for(i=0;i<=sln;i++){
       if (text.charAt(i)==="i"||text.charAt(i)==="I"){
       temp=temp + 1;
       }
    }
document.write(temp);
}
