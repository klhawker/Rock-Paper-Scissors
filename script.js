let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    if (playerScore >= 5 || computerScore >= 5) return;

    const computerSelection = computerPlay();
    let result;

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    
    document.getElementById('player-score').textContent = `Player: ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
    document.getElementById('result').textContent = result;
    rounds++;

    if (playerScore === 5 || computerScore === 5) {
        document.getElementById('restart').style.display = 'block';
        declareWinner();
    }
}

function declareWinner() {
    let winner;
    if (playerScore > computerScore) {
        winner = "You are the winner!";
    } else if (playerScore < computerScore) {
        winner = "Computer is the winner!";
    } else {
        winner = "It's a tie!";
    }
    document.getElementById('result').textContent = `${winner} Final Score: Player ${playerScore} - Computer ${computerScore}`;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;

    document.getElementById('player-score').textContent = 'Player: 0';
    document.getElementById('computer-score').textContent = 'Computer: 0';
    document.getElementById('result').textContent = '';
    document.getElementById('restart').style.display = 'none';
}
