// QUIZZ

let start = document.querySelector("#startButton");
start.addEventListener("click", () => {
  start.style.display = "none";
  document.querySelector("h1").style.display = "none";
  document.querySelector("#fullquizz1").style.display = "block";
});
