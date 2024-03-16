/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.getElementById("add2").value);
    document.querySelector("#sum").value = add(add1, add2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.getElementById("subtract2").value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
multiply = (number1, number2) => number1 * number2;
multiplyNumbers = () => {
    let multiply1 = Number(document.getElementById("factor1").value);
    let multiply2 = Number(document.getElementById("factor2").value);
    document.querySelector("#product").value = multiply(multiply1, multiply2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let divide1 = Number(document.getElementById("dividend").value);
    let divide2 = Number(document.getElementById("divisor").value);
    document.querySelector("#quotient").value = divide(divide1, divide2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", function(){
    let subTotal = document.querySelector("#subtotal").value;
    document.querySelector("#total").textContent = "$"+subTotal + ".00";
if(document.querySelector("#member").checked){
        let st = (subTotal * 0.2);
        let sty = subTotal - st;

        document.querySelector("#total").textContent = "$"+ sty + ".00";
}
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbersArray.filter(oddNumbers);

function oddNumbers(number) {
    return number % 2 != 0;
}
/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter(evenNumbers);

function evenNumbers(number) {
    return number % 2 === 0;
}
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number);

function sumArray(total, num) {
    return total + num;
}
/* Output Multiplied by 2 Array */
let new_array = document.getElementById("multiplied").innerHTML = numbersArray.map((number) => number*2);

// function mapArray(mapNumber) {
//     return mapNumber * 2;
// }
/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = new_array.reduce(newSumArray);

function newSumArray(newTotal, newNum) {
    return newTotal + newNum;
} 