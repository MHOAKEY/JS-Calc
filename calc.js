// Build a simple webpage that has an interactive calculator using JavaScript

// You will want some kind of html element to display the calculations (maybe a span) and a few buttons to press to input numbers and operators

let input = document.getElementById("Input")
const divide = document.getElementById("Divide")
const multiply = document.getElementById("Multiply")
const subtract = document.getElementById("Subtract")
const addition = document.getElementById("Addition")
const seven = document.getElementById("Seven")
const eight = document.getElementById("Eight")
const clear = document.getElementById("Clear")
const four = document.getElementById("Four")
const five = document.getElementById("Five")
const six = document.getElementById("Six")
const allClear = document.getElementById("allClear")
const one = document.getElementById("One")
const two = document.getElementById("Two")
const three = document.getElementById("Three")
const equal = document.getElementById("Equal")


input.addEventListener("Click", useValue)
divide.addEventListener("Click", useValue)
multiply.addEventListener("Click", useValue)
subtract.addEventListener("Click", useValue)
addition.addEventListener("Click", useValue)
seven.addEventListener("Click", useValue)
eight.addEventListener("Click", useValue)
clear.addEventListener("Click", clearInput)
four.addEventListener("Click", useValue)
five.addEventListener("Click", useValue)
six.addEventListener("Click", useValue)
allClear.addEventListener("Click", clearAll)
one.addEventListener("Click", useValue)
two.addEventListener("Click", useValue)
three.addEventListener("Click", useValue)
equal.addEventListener("Click", doEquation)



function useValue() {
    console.log("Dog")
}

function clearInput() {
    console.log("Clear")
}

function clearAll() {
    console.log("All Clear")
}

function doEquation() {
    console.log("Equals")
}