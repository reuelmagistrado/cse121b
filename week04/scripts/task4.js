/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const student = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
student.name = "Reuel Magistrado";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
student.photo = "./images/profile-pic.webp";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
student.favoriteFoods = [
  "Tacos",
  "Nachos",
  "Adobo",
  "Laing",
  "Laksa",
  "Spicy Tobanjan Ramen",
];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
student.hobbies = [
  "play basketball",
  "watch movies",
  "play mobile games",
  "read books",
  "practice coding",
];

// Step 6: Add another property named placesLived with a value of an empty array
student.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
const hometown = {
  place: "Taguig",
  length: "8 years",
};

student.placesLived.push(hometown);
// Step 8: For each property, add appropriate values as strings
const province = {
  place: "Batangas",
  length: "3 months",
};

student.placesLived.push(province);
// Step 9: Add additional objects with the same properties for each place you've lived
const permanentResidence = {
  place: "Makati",
  length: "12 years",
};

student.placesLived.push(permanentResidence);
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
const nameHolder = document.querySelector("#name");
nameHolder.textContent = student.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
const photoHolder = document.querySelector("#photo");
photoHolder.src = student.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photoHolder.alt = student.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const faveFood = student.favoriteFoods.map(
  (faveFood) => `<li>${faveFood}</li>`
);
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
const faveFoodsList = document.querySelector("#favorite-foods");
faveFoodsList.innerHTML = faveFood.join("");
// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobby = student.hobbies.map((hobby) => `<li>${hobby}</li>`);
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const hobbiesList = document.querySelector("#hobbies");

hobbiesList.innerHTML = hobby.join("");
// Step 8: For each object in the placesLived property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
const places = student.placesLived.map(
  (places) => `
  <dt>${places.place}</dt>
  <dd>${places.length}</dd>
  `
);
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
const placesList = document.querySelector("#places-lived");

placesList.innerHTML = places.join("");
