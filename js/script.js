// ruch komputera

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';
let playerMove = 'nieznany ruch';


if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else{
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// ruch gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
}
else if(playerInput == '3'){
    playerMove = 'nożyce';
}
else{
    playerMove = 'nieznany ruch';
}

// wynik

printMessage('Twój ruch to: ' + playerMove);

if((computerMove == 'kamień' && playerMove == 'papier')||(computerMove == 'papier' && playerMove == 'nożyce')||(computerMove == 'nożyce' && playerMove == 'kamień')){
    printMessage('Ty wygrywasz!');
  }

else if((computerMove == 'papier' && playerMove == 'kamień')||(computerMove == 'nożyce' && playerMove == 'papier')||(computerMove == 'kamień' && playerMove == 'nożyce')){
    printMessage('Komputer wygrywa');
}
else if(playerMove == 'nieznany ruch'){
    printMessage('podałeś błędną wartość');
  }
else{
    printMessage('Mamy remis!');
}