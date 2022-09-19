/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Reuel Magistrado";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
const nameHolder = document.querySelector('#name');
nameHolder.insertAdjacentText('afterbegin', myName);

// Step 3: declare and instantiate a variable to hold the current year
const now = new Date();
const currentYear = now.getFullYear();


// Step 4: place the value of the current year variable into the HTML file
const yearHolder = document.querySelector('#year');
yearHolder.insertAdjacentText('afterbegin', currentYear);


// Step 5: declare and instantiate a variable to hold the name of your picture
const imgPath = 'images/profile-pic.webp'


// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').src = imgPath;




/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods = ['Tacos', 'Nachos', 'Adobo', 'Laing', 'Laksa', 'Spicy Tobanjan Ramen'];

// Step 2: place the values of the favorite foods variable into the HTML file
const foodHolder = document.querySelector('#food');
foodHolder.textContent = favoriteFoods.join(', ');

// Step 3: declare and instantiate a variable to hold another favorite food
const faveFood = 'Batil Patong';

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(faveFood);

// Step 5: repeat Step 2
foodHolder.textContent = favoriteFoods.join(', ');


// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift();

// Step 7: repeat Step 2
foodHolder.textContent = favoriteFoods.join(', ');

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();

// Step 9: repeat Step 2
foodHolder.textContent = favoriteFoods.join(', ');


