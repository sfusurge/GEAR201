const grocery_list = [
  "Broccoli",
  "Choclate Chip Cookies",
  "Cheddar Cheese",
  "Apples",
  "Butter",
  "Pizza Pockets",
  "Cinnamon Buns",
  "Bananas",
  "Oranges",
  "Kimchi",
  "Rice",
  "Tortillas",
  "Avocados",
  "Oaxaca Cheese"
];

grocery_list.forEach((item) => {
  listElement = document.createElement("div");
  listElement.className = "item";
  listElement.innerHTML += item;
  document.getElementById("listContainer").appendChild(listElement);
});
