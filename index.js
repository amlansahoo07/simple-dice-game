function rollDice() {
var randomNumber1 = Math.floor(((Math).random() * 6) + 1);
img1Name = "./images/dice" + randomNumber1 + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", img1Name);

var randomNumber2 = Math.floor(((Math).random() * 6) + 1);
img2Name = "./images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("img2")[0].setAttribute("src", img2Name);

var result = "";
if (randomNumber1 === randomNumber2) {
    result = "Draw!";
}
else if (randomNumber1 < randomNumber2) {
    result = "Player 2 Wins! 🏆";
}
else {
    result = "🏆 Player 1 Wins!";
}

document.querySelector("h1").innerHTML = result;
}
