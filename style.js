     
 
var randomNumber = Math.floor(Math.random()*6)+1;

var randomImage = "images/Dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);



var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage1 = "images/Dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage1);

if (randomNumber > randomNumber1) {
    document.querySelector("h1").innerHTML = "💥Player 1 Wins"
}
else if(randomNumber === randomNumber1){
    document.querySelector("h1").innerHTML = "Draw"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins💥"
}