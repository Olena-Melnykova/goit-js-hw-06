const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsItem = document.querySelector("#ingredients");

const itemsListEl = ingredients.map(ingredient => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item")
  itemEl.textContent = `${ingredient}`;
  ingredientsItem.append(itemEl);
    
}
);

console.log(itemsListEl);

