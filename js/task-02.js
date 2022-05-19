const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsItems = document.querySelector("#ingredients");

const markup = (item) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = item;
  return itemEl;
} 
const createMarkup = ingredients.map(markup);
ingredientsItems.append(...createMarkup);

console.log(ingredientsItems);




