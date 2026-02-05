let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("It's a draw!");
  msg.innerText = "It's a draw!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    comScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User choice is:", userChoice);
  //Generate the computer's choice
  const compChoice = genCompChoice();
  console.log("Computer choice is:", compChoice);

  //Draw condition
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    //rock , paper
    if (userWin === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userWin === "paper") {
      //paper, scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //computer have rock, paper and user have scissor
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    //console.log("choice was clicked", userChoice);
  });
});
