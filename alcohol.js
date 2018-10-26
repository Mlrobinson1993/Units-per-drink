const button = document.getElementById('submit');
let results = document.querySelector('.result');
male = document.getElementById('genderM');
female = document.getElementById('genderF');

validateInput = () => {
myCarbs = document.getElementById('carb-content').value;
kcal = document.getElementById('total-cal').value;

    if(myCarbs === "" || kcal === ""){
        alert('Please fill out all fields');
        return;
    }  else {
        alcCalc();
    }
}

alcCalc = () => {
    alcGrams = Math.round((kcal - myCarbs * 4) / 7);
    alcUnits = alcGrams / 8;
    genders();
};

genders = () => {
    if(male.checked) {
        console.log("HELLO")   
    if(alcUnits < 4){
         results.innerHTML = `This drink contains ${alcUnits} units, you can still drink ${4 - alcUnits} units today!`
     } else if (alcUnits > 4){
         results.innerHTML = `This drink contains ${alcUnits} units, you've drank too much! You've gone over your alcohol RDA by ${4 - alcUnits} units.`
     }
    } else if (female.checked) {
        if(alcUnits < 3){
            results.innerHTML = `This drink contains ${alcUnits} units, you can still drink ${3 - alcUnits} units today!`
        } else if (alcUnits > 3){
           results.innerHTML = `This drink contains ${alcUnits} units, you've drank too much! You've gone over your alcohol RDA by ${3 - alcUnits} units.`
    }
 }
 results.style.opacity = 1;
}
button.addEventListener('click', validateInput);



// const alcoholContent = (cal, carbs) => {
// let carbCal = carbs * 4;
// let alcCal = cal - carbCal;    
// return alcCal;
// }



//include option for gender, weight, height + calculation for "Today you have consumed ... of your daily alcohol allowance"
//validate input (if statement and alert);