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
  "Eggs",
  "Coffee",
  "Bacon",
  "Alien Food",
  "Cool Beans",
  "Chicken Breast",
  "Egg",
  "Chicken",
  "Celery",
  "Sushi",
  "Tomatoes",
  "Bread"
];

grocery_list.forEach((item) => {
  listElement = document.createElement("div");
  listElement.className = "item";
  listElement.innerHTML += item;
  document.getElementById("listContainer").appendChild(listElement);
});
