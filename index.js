var randomvariable1=Math.floor(Math.random()*6)+1;
var randomImageSource="images/dice"+randomvariable1+".png";
var image1=document.querySelectorAll("img")[0];
image1.src=randomImageSource

var randomvariable2=Math.floor(Math.random()*6)+1;
var randomImageSource="images/dice"+randomvariable2+".png";
var image2=document.querySelectorAll("img")[1];
image2.src=randomImageSource

if (randomvariable1 > randomvariable2){
    document.querySelector("h1").innerHTML="Player 1 WINS!!!!"
}
if (randomvariable1 < randomvariable2){
    document.querySelector("h1").innerHTML="Player 2 WINS!!!!"
}
if (randomvariable1 == randomvariable2){
    document.querySelector("h1").innerHTML="DRAW"
}