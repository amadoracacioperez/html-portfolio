
function roll(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImages");
    const values = [];
    const images = [];
    
    for( i = 0; i < numOfDice; i++){
        randNumber = Math.floor(Math.random()* 6) +1;
        values.push(randNumber);
        images.push(`<img src="ImagesDize/${randNumber}.jpg">`);
        console.log(values)
    }

    diceResult.textContent = `dice: ${values.join(' , ')}`;
    diceImage.innerHTML = images.join(" ");


}
