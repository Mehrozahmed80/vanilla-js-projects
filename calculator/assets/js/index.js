// var string = "";

// for(var i=0;i<document.querySelectorAll('.calc').length;i++){
//     document.querySelectorAll('.calc')[i].addEventListener("click",function(event){
       
//         if(event.target.innerHTML=== "="){
//                     string=eval(string);
//                     document.querySelector("input").value=string;
//                 }
//                 else if(event.target.innerHTML=== "C"){
//                     string="";
//                     document.querySelector("input").value=string;
//                 }
                
//                 else{
                    
                
//                 console.log(event.target);
//                 string = string+event.target.innerHTML;
//                 document.querySelector("input").value=string;
//                 }

//     })

// }









// let string = "";
// let lastExpression = ""; 
// let resultDisplayed = false;

// document.querySelectorAll('.calc').forEach(button => {
//     button.addEventListener("click", function(event) {
//         let value = event.target.getAttribute("data-value") || event.target.innerHTML;
//         let lastChar = string.slice(-1);

//         if (value === "=") {
//             try {
//                 if (resultDisplayed && lastExpression) {
//                     string += lastExpression; 
//                 }
//                 let result = Function(`"use strict"; return (${string})`)().toString();
//                 document.querySelector("input").value = result;

//                 let match = string.match(/([\+\-\*\/\%]\d+)$/);
//                 lastExpression = match ? match[0] : ""; 

//                 string = result; 
//                 resultDisplayed = true; 
//             } catch {
//                 document.querySelector("input").value = "Error";
//                 string = "";
//                 lastExpression = "";
//             }
//         } else if (value === "C") {
//             string = ""; 
//             lastExpression = "";
//             document.querySelector("input").value = ""; 
//             resultDisplayed = false; 
//         } else if ("+-*/%".includes(value)) {
//             if (resultDisplayed) {
//                 resultDisplayed = false;
//             }
//             if ("+-*/%".includes(lastChar)) {
//                 string = string.slice(0, -1) + value; 
//             } else {
//                 string += value;
//             }
//             document.querySelector("input").value = string;
//         } else {
//             if (resultDisplayed) {
//                 string = ""; 
//                 resultDisplayed = false;
//             }
//             string += value;
//             document.querySelector("input").value = string;
//         }
//     });
// });

// let lastResult = null;
// let lastOperator = "";
// let lastOperand = "";

// document.addEventListener("keydown", function (event) {
//     const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "x", "/", "%", ".", "Enter", "=", "c", "C", "Backspace"];
//     const operators = ["+", "-", "*", "/", "%"];

//     let key = event.key === "x" ? "*" : event.key; // Replace "x" with "*"

//     if (allowedKeys.includes(key)) {
//         if (key === "Enter" || key === "=") {
//             try {
//                 if (resultDisplayed && lastOperator && lastOperand) {
//                     string = lastResult + lastOperator + lastOperand;
//                 }
//                 lastResult = Function(`"use strict"; return (${string})`)().toString();
//                 document.querySelector("input").value = lastResult;

//                 let match = string.match(/([\+\-\*\/\%])(\d+\.?\d*)$/);
//                 if (match) {
//                     lastOperator = match[1];
//                     lastOperand = match[2];
//                 } else {
//                     lastOperator = "";
//                     lastOperand = "";
//                 }

//                 string = lastResult;
//                 resultDisplayed = true;
//             } catch {
//                 string = "Error";
//                 lastResult = null;
//                 lastOperator = "";
//                 lastOperand = "";
//             }
//             document.querySelector("input").value = string;
//         } else if (key.toLowerCase() === "c") {
//             string = ""; 
//             lastResult = null;
//             lastOperator = "";
//             lastOperand = "";
//             document.querySelector("input").value = ""; 
//             resultDisplayed = false; 
//         } else if (key === "Backspace") {
//             string = string.slice(0, -1);
//             document.querySelector("input").value = string;
//         } else if (key === ".") {
//             let lastNum = string.split(/[\+\-\*\/\%]/).pop();
//             if (!lastNum.includes(".")) {
//                 string += ".";
//             }
//         } else {
//             let lastChar = string[string.length - 1];

//             if (operators.includes(lastChar) && operators.includes(key)) {
//                 string = string.slice(0, -1) + key;
//             } else {
//                 if (resultDisplayed) {
//                     string = "";
//                     resultDisplayed = false;
//                 }
//                 string += key; 
//             }

//             document.querySelector("input").value = string;
//         }
//     }
// });




let string = "", lastExpression = "", resultDisplayed = false;
let lastResult = null, lastOperator = "", lastOperand = "";

const inputField = document.querySelector("input");
const operators = ["+", "-", "*", "/", "%"];

document.querySelectorAll(".calc").forEach(button => {
    button.addEventListener("click", event => handleInput(event.target.getAttribute("data-value") || event.target.innerHTML));
});

document.addEventListener("keydown", event => {
    const keyMap = { "Enter": "=", "x": "*", "C": "C", "c": "C", "Backspace": "Backspace" };
    let key = keyMap[event.key] || event.key;
    
    if (/[\d+\-*/%=.CBackspace]/.test(key)) handleInput(key);
});

function handleInput(value) {
    let lastChar = string.slice(-1);

    if (value === "=") {
        evaluateExpression();
    } else if (value === "C") {
        resetCalculator();
    } else if (value === "Backspace") {
        string = string.slice(0, -1);
        inputField.value = string;
    } else if (value === ".") {
        if (!string.split(/[\+\-\*\/\%]/).pop().includes(".")) string += ".";
    } else if (operators.includes(value)) {
        handleOperator(value, lastChar);
    } else {
        handleNumber(value);
    }
}

function evaluateExpression() {
    try {
        if (resultDisplayed && lastOperator && lastOperand) string = lastResult + lastOperator + lastOperand;
        
        lastResult = Function(`"use strict"; return (${string})`)().toString();
        inputField.value = lastResult;

        let match = string.match(/([\+\-\*\/\%])(\d+\.?\d*)$/);
        [lastOperator, lastOperand] = match ? [match[1], match[2]] : ["", ""];

        string = lastResult;
        resultDisplayed = true;
    } catch {
        inputField.value = "Error";
        resetCalculator();
    }
}

function handleOperator(value, lastChar) {
    if (resultDisplayed) resultDisplayed = false;
    string = operators.includes(lastChar) ? string.slice(0, -1) + value : string + value;
    inputField.value = string;
}

function handleNumber(value) {
    if (resultDisplayed) {
        string = "";
        resultDisplayed = false;
    }
    string += value;
    inputField.value = string;
}

function resetCalculator() {
    string = lastExpression = "";
    lastResult = null;
    lastOperator = lastOperand = "";
    resultDisplayed = false;
    inputField.value = "";
}
