// START QUIZZ
let start = document.querySelector("#startButton");
start.addEventListener("click", () => {
  start.style.display = "none";
  document.querySelector("h1").style.display = "none";
  document.querySelector("#fullquizz1").style.display = "block";
});

// QUESTION 1

const correctAnswer1 = document.querySelector("#correctAnswer1");
const wrongAnswer1 = document.querySelector("#wrongAnswer1");
const confirmButton1 = document.querySelector("#confirmButton1");
const nextButton1 = document.querySelector("#nextButton1");

function verifAnswer1() {
  let selectedRadio = document.querySelector('input[name="q1"]:checked');
  if (selectedRadio) {
    if (selectedRadio.classList.contains("rAnswer")) {
      correctAnswer1.style.display = "block";
      confirmButton1.style.display = "none";
      nextButton1.style.display = "block";
      wrongAnswer1.style.display = "none";
    } else if (selectedRadio.classList.contains("wAnswer")) {
      wrongAnswer1.style.display = "block";
      correctAnswer1.style.display = "none";
      setTimeout(() => {
        wrongAnswer1.style.display = "none";
      }, 2000);
    }
  } else {
    alert("Please select an answer");
  }
}

confirmButton1.addEventListener("click", verifAnswer1);

nextButton1.addEventListener("click", () => {
  document.querySelector("#fullquizz1").style.display = "none";
  document.querySelector("#fullquizz2").style.display = "block";
});

// QUESTION 2

const correctAnswer2 = document.querySelector("#correctAnswer2");
const wrongAnswer2 = document.querySelector("#wrongAnswer2");
const confirmButton2 = document.querySelector("#confirmButton2");
const nextButton2 = document.querySelector("#nextButton2");

function verifAnswer2() {
  let selectedRadio = document.querySelector('input[name="q2"]:checked');
  if (selectedRadio) {
    if (selectedRadio.classList.contains("rAnswer")) {
      correctAnswer2.style.display = "block";
      confirmButton2.style.display = "none";
      nextButton2.style.display = "block";
      wrongAnswer2.style.display = "none";
    } else if (selectedRadio.classList.contains("wAnswer")) {
      wrongAnswer2.style.display = "block";
      correctAnswer2.style.display = "none";
      setTimeout(() => {
        wrongAnswer2.style.display = "none";
      }, 2000);
    }
  } else {
    alert("Please select an answer");
  }
}

confirmButton2.addEventListener("click", verifAnswer2);

nextButton2.addEventListener("click", () => {
  document.querySelector("#fullquizz2").style.display = "none";
  document.querySelector("#fullquizz3").style.display = "block";
});

// QUESTION 3

const correctAnswer3 = document.querySelector("#correctAnswer3");
const wrongAnswer3 = document.querySelector("#wrongAnswer3");
const confirmButton3 = document.querySelector("#confirmButton3");
const nextButton3 = document.querySelector("#nextButton3");

function verifAnswer3() {
  let selectedRadio = document.querySelector('input[name="q3"]:checked');
  if (selectedRadio) {
    if (selectedRadio.classList.contains("rAnswer")) {
      correctAnswer3.style.display = "block";
      confirmButton3.style.display = "none";
      nextButton3.style.display = "block";
      wrongAnswer3.style.display = "none";
    } else if (selectedRadio.classList.contains("wAnswer")) {
      wrongAnswer3.style.display = "block";
      correctAnswer3.style.display = "none";
      setTimeout(() => {
        wrongAnswer3.style.display = "none";
      }, 2000);
    }
  } else {
    alert("Please select an answer");
  }
}

confirmButton3.addEventListener("click", verifAnswer3);

nextButton3.addEventListener("click", () => {
  document.querySelector("#fullquizz3").style.display = "none";
  document.querySelector("#fullquizz4").style.display = "block";
});

// QUESTION 4

const correctAnswer4 = document.querySelector("#correctAnswer4");
const wrongAnswer4 = document.querySelector("#wrongAnswer4");
const confirmButton4 = document.querySelector("#confirmButton4");
const nextButton4 = document.querySelector("#nextButton4");
const congrats = document.querySelector("#congrats");

function verifAnswer4() {
  let selectedRadio = document.querySelector('input[name="q4"]:checked');
  if (selectedRadio) {
    if (selectedRadio.classList.contains("rAnswer")) {
      congrats.style.display = "block";
      correctAnswer4.style.display = "block";
      confirmButton4.style.display = "none";
      nextButton4.style.display = "block";
      wrongAnswer4.style.display = "none";
    } else if (selectedRadio.classList.contains("wAnswer")) {
      wrongAnswer4.style.display = "block";
      correctAnswer4.style.display = "none";
      setTimeout(() => {
        wrongAnswer4.style.display = "none";
      }, 2000);
    }
  } else {
    alert("Please select an answer");
  }
}

confirmButton4.addEventListener("click", verifAnswer4);

nextButton4.addEventListener("click", () => {
  window.location.href = "index.html";
});
