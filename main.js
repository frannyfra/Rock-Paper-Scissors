//--- DOM manipulation ---
const buttons = Array.from(document.querySelectorAll("#choice"));
let computer = document.querySelector(".computer");
const outputMessage = document.querySelector(".output-message");
let playerPick;
let computerPick;

//lookup object :
const gameCombinations = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

const moves = Object.keys(gameCombinations);

const calculateWinner = (playerPick, computerPick) => {
    if (gameCombinations[playerPick] === computerPick) {
        outputMessage.innerHTML = "Player wins!";
    } else if (playerPick === computerPick) {
        outputMessage.innerHTML = "Draw!"
    } else {
        outputMessage.innerHTML = "Computer Wins!"
    }
    console.log(gameCombinations[playerPick])
}

const computerMove = () => {
    const computerPick = moves[Math.floor(Math.random() * moves.length)];
    console.log(computerPick)//rock paper scissor
    // add images here
    computer.innerHTML = computerPick;
    calculateWinner(playerPick, computerPick);
};

const playerMove = () => {
    // return playerPick;
    buttons.forEach(button => {
        button.addEventListener("click", event = () => {
            playerPick = button.dataset.type;
            console.log(playerPick, "iam the player pick")
            computerMove(playerPick);
        })
    });
}
playerMove();






//1 rock
//2 paper
//3 scissor

// 1 wins over 3
// 2 wins over 1
// 3 wins over 2

// 1 wins over 3 and loose over 2
// 2 wins over 1 and loose over 3


