
const pi = 3.1415
let radius;
let circumference;

document.getElementById("MySubmit").onclick = function(){
    radius = document.getElementById("MyText").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("MyH3").textContent = `Lenght of Circumference ${circumference} cm`;
}