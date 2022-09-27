const listRef = document.querySelector("#categories");
const itemsRef = document.querySelectorAll(".item");
const numberOfItems = listRef.children.length;

console.log("Number of categories:", numberOfItems);

itemsRef.forEach((element) => {
  const titleRef = element.querySelector("h2").textContent;
  const itemsLength = element.querySelectorAll("li").length;

  console.log("Category:", titleRef);
  console.log("Elements:", itemsLength);
});
