/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
  return number1 + number2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers() {
  const addend1 = parseFloat(document.querySelector("#addend1").value);
  const addend2 = parseFloat(document.querySelector("#addend2").value);
  const sum = document.querySelector("#sum");

  sum.value = add(addend1, addend2);
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const addButton = document.querySelector("#addNumbers");
addButton.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(minuend, subtrahend) {
  return minuend - subtrahend;
}

function subtractNumbers() {
  const minuend = parseFloat(document.querySelector("#minuend").value);
  const subtrahend = parseFloat(document.querySelector("#subtrahend").value);
  const difference = document.querySelector("#difference");

  difference.value = subtract(minuend, subtrahend);
}

const subtractButton = document.querySelector("#subtractNumbers");
subtractButton.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (factor1, factor2) => factor1 * factor2;

const mulitplyNumbers = () => {
  const factor1 = parseFloat(document.querySelector("#factor1").value);
  const factor2 = parseFloat(document.querySelector("#factor2").value);
  const product = document.querySelector("#product");

  product.value = multiply(factor1, factor2);
};

const multiplyButton = document.querySelector("#multiplyNumbers");
multiplyButton.addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () => {
  const dividend = parseFloat(document.querySelector("#dividend").value);
  const divisor = parseFloat(document.querySelector("#divisor").value);
  const quotient = document.querySelector("#quotient");

  quotient.value = divide(dividend, divisor);
};

const divideButton = document.querySelector("#divideNumbers");
divideButton.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();

// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
const year = document.querySelector("#year");
year.textContent = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbers = [];
for (let i = 1; i <= 25; i++) {
  numbers.push(i);
}

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
const array = document.querySelector("#array");
array.textContent = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odds = document.querySelector("#odds");
odds.textContent = numbers.filter((num) => num % 2 !== 0);

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evens = document.querySelector("#evens");
evens.textContent = numbers.filter((num) => num % 2 === 0);

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumOfArray = document.querySelector("#sumOfArray");
sumOfArray.textContent = numbers.reduce((tally, num) => tally + num, 0);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiplied = document.querySelector("#multiplied");
multiplied.textContent = numbers.map((num) => num * 2);

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultiplied = document.querySelector("#sumOfMultiplied");
sumOfMultiplied.textContent = numbers
  .map((num) => num * 2)
  .reduce((tally, num) => tally + num, 0);
