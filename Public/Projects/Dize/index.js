const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

const min = 1;
const max = 6;
let randNumber; 

myButton.onclick = function(){
    randNumber = Math.floor(Math.random()* max) + min;
    myLabel.textContent = randNumber;

}
