//Data 1:-
let heightMark = 1.69;
let weightMark = 78;
let BMIMark = weightMark / (heightMark ** 2);

let heightJohn = 1.95;
let weightJohn = 92;
let BMIJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
document.getElementById("rs1").innerText=`Mark's
BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})`;

//Data 2:-
heightMark = 1.88;
weightMark = 95;
BMIMark = weightMark / (heightMark ** 2);

heightJohn = 1.76;
weightJohn = 85;
BMIJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;
document.getElementById("rs2").innerText=`Mark's
BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})`;
