
var x = document.getElementById("teacher");
var y = document.getElementById("parents");
var z = document.getElementById("donor");
var a = document.getElementById("btn");


function teacher(){
    x.style.left = "20px";
    y.style.left = "950px";
    z.style.left = "900px";
    a.style.left = "0px";
}
function parent(){
    y.style.left = "20px";
    x.style.left = "700px";
    z.style.left = "910px";
    a.style.left = "180px";
}
function donor(){
    z.style.left = "20px";
    x.style.left = "800px";
    y.style.left = "950px";
    a.style.left = "360px";
}