// main.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let recipes = getRecipesFromStorage();
  addRecipesToDocument(recipes);
  initFormHandler();
}

function getRecipesFromStorage() {
  // A9. Get 'recipes' from localStorage
  return JSON.parse(localStorage.getItem('recipes')) || [];
}

function addRecipesToDocument(recipes) {
  // A10. Get a reference to the <main> element
  const main = document.querySelector('main');

  // A11. Loop through each of the recipes
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('recipe-card');
    recipeCard.data = recipe;
    main.appendChild(recipeCard);
  });
}

function saveRecipesToStorage(recipes) {
  // B1. Save 'recipes' to localStorage
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

function initFormHandler() {
  // B2. Get a reference to the <form> element
  const form = document.querySelector('form');

  // B3. Add an event listener for the 'submit' event
  form.addEventListener('submit', event => {
    event.preventDefault();

    // B4. Create a new FormData object
    const formData = new FormData(form);

    // B5. Create an empty object and insert keys and values from formData
    const recipeObject = Object.fromEntries(formData.entries());

    // B6. Create a new <recipe-card> element
    const recipeCard = document.createElement('recipe-card');

    // B7. Add the recipeObject data to <recipe-card>
    recipeCard.data = recipeObject;

    // B8. Append this new <recipe-card> to <main>
    document.querySelector('main').appendChild(recipeCard);

    // B9. Get the recipes array from localStorage, add this new recipe, and save it back
    const recipes = getRecipesFromStorage();
    recipes.push(recipeObject);
    saveRecipesToStorage(recipes);
  });

  // B10. Get a reference to the "Clear Local Storage" button
  const clearButton = document.querySelector('button[class="danger"]');;

  // B11. Add a click event listener to clear local storage button
  clearButton.addEventListener("click",event=>{
    // Steps B12 & B13 will occur inside the event listener from step B11
      // B12. TODO - Clear the local storage
      localStorage.clear();
      // B13. TODO - Delete the contents of <main>
        var getMain = document.querySelector("main");
        while (getMain.hasChildNodes())
        getMain.removeChild(getMain.firstChild);
        })
}
