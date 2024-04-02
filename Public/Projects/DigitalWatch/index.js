
function updateClock(){

    const now = new Date();
    /* Para rellenar con 0 delante, convertimos en string y luego con la funcion PadStar rellenamos los dos primeros con 0*/ 
    const hours = now.getHours().toString().padStart(2,0); 
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);

    /*Template literal y rellenamos con los valores actuales*/
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);