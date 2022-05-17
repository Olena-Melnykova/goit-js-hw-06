const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsItem = document.getElementById("ingredients");

const itemsListEl = ingredients.forEach(ingredient => {
  const itemEl = document.createElement("li");
  itemEl.innerHTML = ingredient;
  ingredientsItem.append(itemEl);
    
}
);

console.log(itemsListEl);

