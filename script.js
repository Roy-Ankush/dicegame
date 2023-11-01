let firstrandom=Math.floor(Math.random()*6)+1;
var image="images/dice"+firstrandom+".png";
var one=document.querySelector(".img1");
one.setAttribute("src",image);


let secondrandom=Math.floor(Math.random()*6)+1;
var imager="images/dice"+secondrandom+".png";
var one=document.querySelector(".img2");
one.setAttribute("src",imager);

if(firstrandom>secondrandom){
    document.querySelector("h1").innerHTML="winner1"
}
else if(secondrandom>firstrandom){
    document.querySelector("h1").innerHTML="winner2"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}

