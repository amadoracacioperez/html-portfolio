
const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random()*(max - min + 1));

let guess;
let attemps = 0;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${min} - ${max}:`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a valid number1:`);
    }

    else if(guess < min || guess > max){
        window.alert(`Please enter a valid number2:`);
    }

    else{
        attemps++;
        if(guess < randomNumber){
            window.alert("Too low! Try again!");
        }
        else if(guess > randomNumber){
            window.alert("Too High! Try again!");
        }
        else{
            window.alert(`CORRECT! The answer was ${randomNumber}. It took you ${attemps} attemps`);
            running = false;
        }

    }
}


