
var x = document.getElementById("teacher");
var y = document.getElementById("parents");
var z = document.getElementById("donor");
var a = document.getElementById("btn");

var b = document.getElementById("teacher");

function parent(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "-710px";
    a.style.left = "144px";
}
function teacher(){
    x.style.left = "50px";
    y.style.left = "950px";
    z.style.left = "-900px";
    a.style.left = "0px";
}
function donor(){
    x.style.left = "-400px";
    y.style.left = "950px";
    z.style.left = "50px";
    a.style.left = "280px";
}