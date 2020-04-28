//--- DOM manipulation ---
const buttons = Array.from(document.querySelectorAll("#choice"));
let computer = document.querySelector(".computer");
const outputMessage = document.querySelector(".output-message");

//lookup object :
const movesObj = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

const moves = Object.keys(movesObj);
const waitTime = 50;

const calculateWinner = () => {
    if (moves[playerPick] === computerPick) {
        outputMessage.innerHTML = "Player wins";
    } else if (playerPick === computerPick) {
        outputMessage.innerHTML = "Draw!"
    } else {
        outputMessage.innerHTML = "Computer Wins"
    }

}

const computerMove = () => {
    //select a random number based on the length of moves arrays 
    // const randomNumber = Math.floor(Math.random() * moves.length);
    const computerPick = moves[Math.floor(Math.random() * moves.length)];
    console.log(computerPick)//rock paper scissor
    computer.src = `${computerPick}`; // add images here
};

const playerMove = () => {
    // return playerPick;
    buttons.forEach(button => {
        button.addEventListener("click", event = () => {
            const playerPick = button.dataset.type;
            console.log(playerPick)
            computerMove();
        })
    });
    calculateWinner();
}
playerMove();




// if ((computerMove === moves[0] && playerMove === moves[1]) || (computerMove === moves[2] && playerMove === moves[0]) || (computerMove === moves[1] && playerMove === moves[2])) {
//     return "player two won"
    // } else if {
    //     return "player one won"
    // }
    //     if (computerMove === playerMove) {
    //         return "It's a draw";
    //     } else { return "it s a draw" }






//1 rock
//2 paper
//3 scissor

// 1 wins over 3
// 2 wins over 1
// 3 wins over 2

// 1 wins over 3 and loose over 2
// 2 wins over 1 and loose over 3


