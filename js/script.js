
function getMoveName(argMoveId){
    console.log('numbers:', argMoveId);
    if(argMoveId == 1){
        return 'kamień';
      }
    else if(argMoveId == 2){
        return 'papier';
      }
    else if(argMoveId == 3){
        return 'nożyce';
      }
    else {
        printMessage('nie znam ruchu o id: ' + argMoveId + '.')
        return 'nieznany ruch'
    }
}

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);

    if((argComputerMove == 'kamień' && argPlayerMove == 'papier')||(argComputerMove == 'papier' && argPlayerMove == 'nożyce')||(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
        return 'Ty wygrywasz!';
      }
    
    else if((argComputerMove == 'papier' && argPlayerMove == 'kamień')||(argComputerMove == 'nożyce' && argPlayerMove == 'papier')||(argComputerMove == 'kamień' && argPlayerMove == 'nożyce')){
        return 'Komputer wygrywa';
    }
    else if(playerMove == 'nieznany ruch'){
        return 'podałeś błędną wartość';
      }
    else{
        return 'Mamy remis!';
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Moj wybor to: ' + computerMove)

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);

printMessage('Twoj wybor to: ' + playerMove);

let result = displayResult(computerMove, playerMove);

printMessage(result); 


