const grocery_list = [
  "Broccoli",
  "Chocolate Chip Cookies",
  "Cheddar Cheese",
  "Apples",
  "Butter",
  "Pizza Pockets",
  "Cinnamon Buns",
  "Bananas",
  "Oranges",
  "Brownies",
  "Cupcakes",
  "Kimchi",
  "Rice",
  "Tortillas",
  "Avocados",
  "Oaxaca Cheese",
  "Funfetti Cake",
  "Orange juice",
  "Coffee",
  "Bacon",
  "Oranges",
];

grocery_list.forEach((item) => {
  listElement = document.createElement("div");
  listElement.className = "item";
  listElement.innerHTML += item;
  document.getElementById("listContainer").appendChild(listElement);
});
