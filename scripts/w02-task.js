/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Iwinosa Fabian Idahosa';

const currentYear = 2024;

const profilePicture = "images/tinywow_IMG_8236_34542472.jpg";




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
document.querySelector('img').setAttribute('src', profilePicture);




/* Step 5 - Array */
//Declare an array variable to hold your favorite foods.
const favoriteFoods = ['Turkey ', 'Steak ', 'Chicken ', 'Rice'];
foodElement.textContent = favoriteFoods;
const anotherFavoriteFood = 'Jollof rice';
favoriteFoods.push([anotherFavoriteFood]);
foodElement.innerHTML+= `<br>${favoriteFoods}`;
favoriteFoods.shift(0);
foodElement.innerHTML+= `<br>${favoriteFoods}`;
favoriteFoods.pop(3);
foodElement.innerHTML+= `<br>${favoriteFoods}`;
//place the values of the favorite foods variable into the HTML file


