var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var newPathImg1 = "images/dice"+randomNumber1+".png";
var newPathImg2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute('src', newPathImg1);
document.querySelector(".img2").setAttribute('src', newPathImg2);

if(randomNumber1 > randomNumber2) {
  document.getElementById("title").innerHTML = 'Player 1 wins !🎉';
} else if (randomNumber1 < randomNumber2) {
  document.getElementById("title").innerHTML = '🎉Player 2 wins !';
} else if (randomNumber1 === randomNumber2) {
  document.getElementById("title").innerHTML = 'Draw !';
}
