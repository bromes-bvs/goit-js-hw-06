const listRef = document.querySelector("#categories");
const itemsRef = document.querySelectorAll("li.item");

function listLength() {
  const numberOfCategories = listRef.children.length;

  return console.log("Number of categories:", numberOfCategories);
}
listLength();

const itemsArray = [...itemsRef];
itemsArray.map((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  console.log("Category:", itemTitle);
  const itemElements = item.querySelector("ul").children.length;
  console.log("Elements:", itemElements);
});
