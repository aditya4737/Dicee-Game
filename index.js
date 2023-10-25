var randomnumber1 = Math.floor(Math.random()*6)+1;
var imagesrc1 = "images/dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imagesrc1);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var imagesrc2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imagesrc2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML=" 🚩 Player 1 Wins!!!";
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML=" Player 2 Wins!!! 🚩 ";
}
else
{
    document.querySelector("h1").innerHTML=" Draw!!";
}