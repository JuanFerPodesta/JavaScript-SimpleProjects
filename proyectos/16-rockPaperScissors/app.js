// cashing the dom -> sotoring the dom for future uses, es decir me traigo todo lo que voy a necesitar

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function convertChoiceToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

/* VAMOS A USAR LOS ARGS PARA MANDAR LOS MENSAJES SOLAMENTE */
function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertChoiceToWord(
    user
  )} beats ${convertChoiceToWord(computer)} .You win! 🥳`;
  const userChoice = document.getElementById(user);
  userChoice.classList.add("green-glow");
  setTimeout(() => userChoice.classList.remove("green-glow"), 500);
}

function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertChoiceToWord(
    user
  )} beats ${convertChoiceToWord(computer)} .You lost! 💩`;
  const userChoice = document.getElementById(user);
  userChoice.classList.add("red-glow");
  setTimeout(() => userChoice.classList.remove("red-glow"), 500);
}

function draw(user, computer) {
  result_p.innerHTML = `It's a draw! 😐`;
  const userChoice = document.getElementById(user);
  userChoice.classList.add("gray-glow");
  setTimeout(() => userChoice.classList.remove("gray-glow"), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
