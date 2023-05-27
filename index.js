var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
image1.setAttribute("src", `images/dice${randomNumber1}.png`);
image2.setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 👏 won!!";
  document.querySelector("#p1").innerText = "Player 1 🎉🎊";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 👏 won!!";
  document.querySelector("#p2").innerText = "Player 2 🎉🎊";
} else {
  document.querySelector("h1").innerText = "Draw 🟰";
  document.querySelector("#p1").innerText = "Player 1";
  document.querySelector("#p2").innerText = "Player 2";
}
