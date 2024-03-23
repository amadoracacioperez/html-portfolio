
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temperature; 

function convert(){
    if(toFahrenheit.checked){
        //F = ((9/5) * celsius) +32
        temperature = textBox.value
        temperature = ((9/5) * temperature) +32;
        result.textContent = `Your temperature is: ${temperature.toFixed(1)} ºF`;
    }
    else if(toCelsius.checked){
        //celsius = (F -32) * (5/9)
        temperature = textBox.value;
        temperature = (temperature -32) * (5/9);
        result.textContent = `Your temperature is: ${temperature.toFixed(1)} Cº`;

    }
    else{
        result.textContent = "You must select a unit to convert";
    }
}