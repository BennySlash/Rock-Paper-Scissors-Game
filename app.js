let userscore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const ComputerScore_span = document.getElementById("computer-score");
const ScoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const sissors_div = document.getElementById("Sissors");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Sissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userscore++;
  userScore_span.innerHTML = userscore;
  ComputerScore_span.innerHTML = computerScore;
  const userChoiceWin = userChoice.fontcolor("green");
  const computerChoiceLose = computerChoice.fontcolor("red");
  result_p.innerHTML =
    userChoiceWin + " beats " + computerChoiceLose + " You Win! 🔥🔥🔥";
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 300);
}
function lose(userChoice, computerChoice) {
  computerScore++;
  ComputerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userscore;
  const userChoiceLose = userChoice.fontcolor("red");
  const computerChoiceWin = computerChoice.fontcolor("green");
  result_p.innerHTML =
    userChoiceLose +
    " loses to " +
    computerChoiceWin +
    " You Lose! 💩💩💩👎👎👎";
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 300);
}
function draw(userChoice, computerChoice) {
  const draw = "Draw";
  result_p.innerHTML = draw.fontcolor("blue");
  document.getElementById(userChoice).classList.add("blue-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("blue-glow");
  }, 300);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "RockSissors":
    case "PaperRock":
    case "SissorsPaper":
      win(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperSissors":
    case "SissorsRock":
      lose(userChoice, computerChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "SissorsSissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("Rock");
  });
  paper_div.addEventListener("click", function () {
    game("Paper");
  });
  sissors_div.addEventListener("click", function () {
    game("Sissors");
  });
}
main();
