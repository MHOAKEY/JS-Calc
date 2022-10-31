// Build a simple webpage that has an interactive calculator using JavaScript

// You will want some kind of html element to display the calculations (maybe a span) and a few buttons to press to input numbers and operators

let input = document.getElementById("Input");
let history = "";
const divide = document.getElementById("Divide");
const multiply = document.getElementById("Multiply");
const subtract = document.getElementById("Subtract");
const addition = document.getElementById("Addition");
const seven = document.getElementById("Seven");
const eight = document.getElementById("Eight");
const nine = document.getElementById("Nine");
const clear = document.getElementById("Clear");
const four = document.getElementById("Four");
const five = document.getElementById("Five");
const six = document.getElementById("Six");
const allClear = document.getElementById("allClear");
const one = document.getElementById("One");
const two = document.getElementById("Two");
const three = document.getElementById("Three");
const equal = document.getElementById("Equal");
const zero = document.getElementById("Zero");

input.addEventListener("click", useValue);
divide.addEventListener("click", useValue);
multiply.addEventListener("click", useValue);
subtract.addEventListener("click", useValue);
addition.addEventListener("click", useValue);
seven.addEventListener("click", useValue);
eight.addEventListener("click", useValue);
nine.addEventListener("click", useValue);
clear.addEventListener("click", clearInput);
four.addEventListener("click", useValue);
five.addEventListener("click", useValue);
six.addEventListener("click", useValue);
allClear.addEventListener("click", clearAll);
one.addEventListener("click", useValue);
two.addEventListener("click", useValue);
three.addEventListener("click", useValue);
equal.addEventListener("click", doEquation);
zero.addEventListener("click", useValue);

function addToHistory(value) {
  history += value;
  document.getElementById("history").innerText = history;
}

function reduceArrayAddition(total, num) {
  return total + num;
}

function reduceArraySubtract(total, num) {
  return total - num;
}

function reduceArrayDivide(total, num) {
  return total / num;
}

function reduceArrayMultiply(total, num) {
  return total * num;
}

function useValue(event) {
  input.value += event.target.innerHTML;
  addToHistory(event.target.innerText);
}

function clearInput() {
  addToHistory("\n");
  input.value = "";
}

function clearAll() {
  input.value = "";
  history = "";
  document.getElementById("history").innerText = "";
}

console.log(input);

function doEquation() {
  addToHistory("=");
  let myArray = [];
  let myAnswer = 0;
  let numArray = [];
  if (input.value.includes("+")) {
    myArray = input.value.split("+");
    numArray = myArray.map((str) => {
      return Number(str);
    });
    myAnswer = numArray.reduce(reduceArrayAddition);
    input.value = myAnswer;
    addToHistory(myAnswer);
  }
  if (input.value.includes("-")) {
    myArray = input.value.split("-");
    numArray = myArray.map((str) => {
      return Number(str);
    });
    myAnswer = numArray.reduce(reduceArraySubtract);
    input.value = myAnswer;
    addToHistory(myAnswer);
  }
  if (input.value.includes("/")) {
    myArray = input.value.split("/");
    numArray = myArray.map((str) => {
      return Number(str);
    });
    myAnswer = numArray.reduce(reduceArrayDivide);
    input.value = myAnswer;
    addToHistory(myAnswer);
  }
  if (input.value.includes("*")) {
    myArray = input.value.split("*");
    numArray = myArray.map((str) => {
      return Number(str);
    });
    myAnswer = numArray.reduce(reduceArrayMultiply);
    input.value = myAnswer;
    addToHistory(myAnswer);
  }
}
