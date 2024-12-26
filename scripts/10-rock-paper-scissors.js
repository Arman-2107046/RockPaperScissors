const score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Draws: 0,
};
updateScoreBoard();

function playGame(playerMove) {
  const moves = ["rock", "paper", "scissors"];
  const computerMove = moves[Math.floor(Math.random() * 3)];
  let result;
  if (playerMove === computerMove) {
    result = "DRAW";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "scissors" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "rock")
  ) {
    result = "WIN";
  } else {
    result = "LOSS";
  }

  //updating
  if (result === "WIN") score.Wins++;
  if (result === "LOSS") score.Losses++;
  if (result === "DRAW") score.Draws++;

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreBoard();
  updateMove(playerMove, computerMove);

  updateResult(result);

  alert(
    `You picked ${playerMove}, computer picked ${computerMove}. Result: ${result} \nWins: ${score.Wins}\nLosses: ${score.Losses}\nDraws: ${score.Draws}`
  );
}

function resetGame() {
  score.Wins = 0;
  score.Losses = 0;
  score.Draws = 0;

  localStorage.setItem("score", JSON.stringify(score));
  alert("Scores have been reset.\nWins: 0\nLosses: 0\nDraws: 0");
  updateScoreBoard();

  document.querySelector(".js-move").innerHTML = ``;
  document.querySelector(".js-result").innerHTML = ``;
}

function updateScoreBoard() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.Wins}  Losses: ${score.Losses}  Draws: ${score.Draws}`;
}
function updateMove(playerMove, computerMove) {
  document.querySelector(
    ".js-move"
  ).innerHTML = `You &nbsp;&nbsp;&nbsp;            
    <img src="images/${playerMove}.png" alt="" class="move-icon">
    <img src="images/${computerMove}.png" alt="" class="move-icon">Computer`;
}
function updateResult(result) {
  document.querySelector(".js-result").innerHTML = `${result}`;
}
