
var num = 0;
showslide(num);
function showslide(n){
var slides = document.getElementsByClassName("myslide");
if(n > 6)num = 0;
if(n < 0)num = 6;
for(i=0;i<9;i++){
    slides[i].style.display = "none";
}
slides[num].style.display ="inline-block";
slides[num+1].style.display ="inline-block";
slides[num+2].style.display ="inline-block";
console.log(num);
}

function add(i){
showslide(num += i);
}   