const foodItems = ["🍎", "🍓", "🍇", "🥦", "🥕"];

// forEach: виконуємо функцію для кожного елемента масиву
console.log("Використання forEach:");
foodItems.forEach((item, index) => {
  console.log(`Елемент ${index}: ${item}`);
});

// map: перетворюємо кожне значення, додаючи знак оклику
console.log("\nВикористання map:");
const foodWithExclamation = foodItems.map(item => item + "!");
console.log(foodWithExclamation);

// filter: відбираємо ті елементи, що рівні '🍇'
console.log("\nВикористання filter:");
const filteredFood = foodItems.filter(item => item === "🍇");
console.log(filteredFood);

// Додаткові приклади forEach
console.log("\nДодаткові приклади forEach:");
// Повна сигнатура колбек-функції
foodItems.forEach((item, index, array) => {
  console.log(`${item} на позиції ${index} в масиві ${array}`);
});

// На відміну від циклу for, в методі forEach не можна використовувати break та continue
// Ось приклад з циклом for і break:
console.log("Приклад з break у for:");
for (let i = 0; i < foodItems.length; i++) {
  if (foodItems[i] === "🥦") break;
  console.log(foodItems[i]);
}

// Приклад з continue у for:
console.log("\nПриклад з continue у for:");
for (let i = 0; i < foodItems.length; i++) {
  if (foodItems[i] === "🍇") continue;
  console.log(foodItems[i]);
}

// У forEach такий код не спрацює - break та continue викличуть помилку:
// foodItems.forEach(item => {
//     if (item === "🥦") break;     // Помилка!
//     console.log(item);
// });

// Розширені приклади map
console.log("\nРозширені приклади map:");
// Використання всіх параметрів
const withIndexes = foodItems.map((item, index, array) => {
  return `${index + 1}) ${item} з ${array.length}`;
});
console.log(withIndexes);

// Ланцюжок операцій
const processed = foodItems
  .map(item => item + "!")
  .map(item => item.repeat(2));
console.log(processed);

// Додаткові приклади filter
console.log("\nДодаткові приклади filter:");
// Складна умова
const filtered = foodItems.filter((item, index) => {
  return item === "🍎" || index < 3;
});
console.log(filtered);

// Фільтрація з map
const processedFiltered = foodItems
  .filter(item => item !== "🥕")
  .map(item => item + "✨");
console.log(processedFiltered);

// З об'єктами
const items = [
  { name: "🍎", type: "fruit" },
  { name: "🥕", type: "vegetable" }
];
const fruits = items.filter(item => item.type === "fruit");
console.log(fruits);
