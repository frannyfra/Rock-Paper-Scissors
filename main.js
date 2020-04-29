//--- DOM manipulation ---
const buttons = Array.from(document.querySelectorAll("#choice"));
let computer = document.querySelector(".computer");
const outputMessage = document.querySelector(".output-message");
let playerPick;
let computerPick;
const waitingTime = 50;
const scrumbleComputerPick = 25;
//lookup object :
const gameCombinations = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};
const moves = Object.keys(gameCombinations);

const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

const calculateWinner = (playerPick, computerPick) => {
    if (gameCombinations[playerPick] === computerPick) {
        outputMessage.innerHTML = "Player wins!";
    } else if (playerPick === computerPick) {
        outputMessage.innerHTML = "Draw!"
    } else {
        outputMessage.innerHTML = "Computer Wins!"
    }
}

const computerMove = async playerPick => {
    let computerPick = null;
    for (let i = 0; i < scrumbleComputerPick; i++) {
        await wait(waitingTime);
        computerPick = moves[Math.floor(Math.random() * moves.length)];
        computer.innerHTML = computerPick;
    }
    calculateWinner(playerPick, computerPick);
};

const playerMove = () => {
    buttons.forEach(button => {
        button.addEventListener("click", event = () => {
            playerPick = button.dataset.type;
            console.log(playerPick, "iam the player pick")
            computerMove(playerPick);
        })
    });
}
playerMove();
