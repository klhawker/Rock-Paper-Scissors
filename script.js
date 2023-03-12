function getComputerChoice() {
    let arr_rpc = ['rock', 'paper', 'scissors'];
    let random_int = Math.floor(Math.random() * 3);
    let computer_choice = arr_rpc[random_int];
    return computer_choice;
}

function getPlayerChoice() {
    let selection = prompt('Choose Rock, Paper or Scissors: ');
    selection.toLowerCase();
    return selection
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
let comp_choice = getComputerChoice();
let player_choice = getPlayerChoice();
playRound(comp_choice, player_choice);