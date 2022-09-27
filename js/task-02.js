const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liRef = document.querySelector("#ingredients");

const newItemsList = ingredients.map((item) => {
  const liRef = document.createElement("li");
  liRef.textContent = item;
  liRef.classList.add("item");
  return liRef;
});
liRef.append(...newItemsList);
