const grocery_list = [
  "Broccoli",
  "Choclate Chip Cookies",
  "Cheddar Cheese",
  "Apples",
  "Butter",
  "Pizza Pockets",
  "Cinnamon Buns",
  "Bananas",
  "Oranges"
];

grocery_list.forEach((item) => {
  listElement = document.createElement("div");
  listElement.className = "item";
  listElement.innerHTML += item;
  document.getElementById("listContainer").appendChild(listElement);
});
