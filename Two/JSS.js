
function myfunc(){
console.log("hello");
var textbox = document.getElementById("search");
var table = document.getElementById("mytable");
var value = textbox.value;
console.log(value);
var tr = table.getElementsByTagName("tr");
for(i=1;i<tr.length;i++){
    var td = tr[i].getElementsByTagName("td")[0];
    var str = td.textContent;
    console.log(str);
    if(str.includes(value))tr[i].style.display ="";
    else tr[i].style.display ="none";
}
}

