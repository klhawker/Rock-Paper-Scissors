function getComputerChoice() {
    let arr_rpc = ['rock', 'paper', 'scissors'];
    let random_int = Math.floor(Math.random() * 3);
    let computer_choice = arr_rpc[random_int];
    return computer_choice;
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection == 'rock' && computerSelection =='scissors') {
        return 'Rock beats scissors, player wins!';
    } else if (playerSelection == 'rock' && computerSelection =='paper'){
        return 'Paper beats rock, computer wins!';
    } else if (playerSelection == 'paper' && computerSelection =='rock'){
        return 'Paper beats rock, players wins!';
    } else if (playerSelection == 'paper' && computerSelection =='scissors'){
        return 'Scissors beats paper, computer wins!';
    } else if (playerSelection == 'scissors' && computerSelection =='paper'){
        return 'Scissors beats paper, player wins!';
    } else if (playerSelection == 'scissors' && computerSelection =='rock'){
        return 'Rock beats scissors, computer wins!';
    } else if (playerSelection == computerSelection){
        return 'Draw!';
    }
}

function game(playerChoice) {
    let result_div = document.getElementsByClassName('result')[0];
    result_div.innerHTML = ""; //reset the results div text

    let compChoice = getComputerChoice();
    let result = playRound(compChoice, playerChoice);
    
    result_div.insertAdjacentText('afterbegin', result);
}
game();