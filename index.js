/*const minmum =  50;
const maxmum = 100;
const answer =Math.floor( Math.random() * (maxmum - minmum + 1)) + minmum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minmum} - ${maxmum}`)
    guess = Number(guess)

    if (isNaN(guess)) {
        window.alert("Please enter a valid number")
    }
    else if(guess < minmum || guess > maxmum){
        window.alert("Please enter a valid number")   
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert("TOO LOW! TRY AGAIN")
        }
        else if(guess > answer ){
            window.alert("TOO HIGH! TRY AGAIN")

        }
        else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
            
        }
    }
}
*/

let submit = document.getElementById("mysubmit");
let input = document.getElementById("myinput");
let result = document.getElementById("result");
const minmum = 50;
const maxmum = 100;
const answer = Math.floor(Math.random() * (maxmum - minmum +1)) + minmum;
 let attempts = 0;
 let guess ;
 let running = true;
 

submit.onclick = function(){


    guess = input.value;
    guess = Math.floor(Number(guess));
    if (isNaN(guess)) {
        result.textContent = `Please enter a valid number`
    } 
    else if(guess < minmum || guess > maxmum){
        result.textContent = `Please enter a valid number`
    }
    else {
        attempts++;
        if (guess < answer) {
            result.textContent = `TOO LOW! TRY AGAIN`
        }
        else if(guess > answer){
            result.textContent = `TOO HIGH! TRY AGAIN`
        }
        else {
            result.textContent = `CORRECT!
             The answer was ${answer}. It took you ${attempts} attempts`
            running = false;
        }
        
    }
 }
 
