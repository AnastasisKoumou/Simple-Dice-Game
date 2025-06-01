var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imgDice1 = document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
var imgDice2 = document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

//Second Way
/*
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imgDiceNumber = "dice" + randomNumber1 + ".png";

var imgDiceSource = "images/" + imgDiceNumber;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imgDiceSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imgDiceNumber2 = "dice" + randomNumber2 + ".png";

var imgDiceSource2 = "images/" + imgDiceNumber2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imgDiceSource2);
*/