// Build a simple webpage that has an interactive calculator using JavaScript

// You will want some kind of html element to display the calculations (maybe a span) and a few buttons to press to input numbers and operators

let input = document.getElementById("Input");
let HISTORY = "";
const clear = document.getElementById("Clear");
const allClear = document.getElementById("allClear");
const equal = document.getElementById("Equal");
const calcButtons = document.querySelectorAll(".calcButton");

clear.addEventListener("click", clearInput);
allClear.addEventListener("click", clearAll);
equal.addEventListener("click", doEquation);
calcButtons.forEach(addEventListenerToCalcButtons);

function addEventListenerToCalcButtons(calcButton) {
  calcButton.addEventListener("click", useValue);
}

function addToHistory(value) {
  HISTORY += value;
  document.getElementById("history").innerText = HISTORY;
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
  HISTORY = "";
  document.getElementById("history").innerText = "";
}

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
