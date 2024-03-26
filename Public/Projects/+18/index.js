//IF STATMENTS
const myText = document.getElementById("myText");
const submitBtn = document.getElementById("myButton");
const answer = document.getElementById("answer");
const MargotRobbie = document.getElementById("MargotRobbie");

submitBtn.onclick = function(){
    age = myText.value;
    age = Number(age);
    if(age <= 17){
        answer.textContent = `You are too young for this website`
    }
    else if(age >=18 && age <24){
        answer.textContent = `You are not older enough to see this content. Try next year`
    }
    else if(age == 24){
        answer.textContent = `You are the perfect age for this site`
        MargotRobbie.innerHTML = '<img src="margot.jpg">';
    }
    else if(age > 24 && age < 90){
        answer.textContent = `You are too old for this site`
    }
    else if(age >= 90){
        answer.textContent = `Be careful! You can suffer a heart attack.`
    }
    else{
        answer.textContent = `Access denied.`
    }
}