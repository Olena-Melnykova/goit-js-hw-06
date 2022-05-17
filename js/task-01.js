const listItem = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listItem.length}`);

const list = document.querySelectorAll("#categories>li");
list.forEach(elem => {
  console.log(
    `Category: ${elem.firstElementChild.textContent}, Elements: ${elem.lastElementChild.children.length}`,
  );
});