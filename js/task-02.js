const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const creatLi = document.createElement("li");
  creatLi.textContent = ingredient;
  creatLi.classList.add("item");
  return creatLi;
});

// console.log(elements);

ingredientsListRef.append(...elements);
