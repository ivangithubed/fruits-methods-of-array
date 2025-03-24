# Методи масивів у JavaScript

## Початковий масив
```javascript
const foodItems = ["🍎", "🍓", "🍇", "🥦", "🥕"];
```

## forEach
Метод `forEach` виконує задану функцію один раз для кожного елемента масиву.
- Не повертає нового масиву
- Використовується для виконання операцій з кожним елементом

### Код:
```javascript
const foodItems = ["🍎", "🍓", "🍇", "🥦", "🥕"];
foodItems.forEach((item, index) => {
  console.log(`Елемент ${index}: ${item}`);
});
```

### Результат виконання:
```
Елемент 0: 🍎
Елемент 1: 🍓
Елемент 2: 🍇
Елемент 3: 🥦
Елемент 4: 🥕
```

### Додаткова інформація:
```javascript
// Повна сигнатура колбек-функції
foodItems.forEach((item, index, array) => {
  console.log(`${item} на позиції ${index} в масиві ${array}`);
});

// На відміну від циклу for, в методі forEach не можна використовувати break та continue
// Приклад з циклом for і break:
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
```

## map
Метод `map` створює новий масив з результатів виклику функції для кожного елемента.
- Повертає новий масив тієї ж довжини (навіть коли масив розріджений)
- Не змінює оригінальний масив
- Корисний для трансформації даних

### Код:
```javascript
const foodWithExclamation = foodItems.map(item => item + "!");
console.log(foodWithExclamation);
```

### Результат виконання:
```
["🍎!", "🍓!", "🍇!", "🥦!", "🥕!"]
```

### Розширені приклади:
```javascript
// Використання всіх параметрів
const withIndexes = foodItems.map((item, index, array) => {
  return `${index + 1}) ${item} з ${array.length}`;
});

// Ланцюжок операцій
const processed = foodItems
  .map(item => item + "!")
  .map(item => item.repeat(2));
```

## filter
Метод `filter` створює новий масив з елементами, які проходять перевірку у функції.
- Повертає новий масив з відфільтрованими елементами(на ітерації з якими функція повернула `true`)
- Може мати іншу довжину, ніж оригінальний масив(наприклад коли початковий масив розріджений)
- Використовується для відбору елементів за певною умовою

### Код:
```javascript
const filteredFood = foodItems.filter(item => item === "🍇");
console.log(filteredFood);
```

### Результат виконання:
```
["🍇"]
```
### Додаткові приклади:
```javascript
// Складна умова
const filtered = foodItems.filter((item, index) => {
  return item === "🍎" || index < 3;
});

// Фільтрація з map
const processedFiltered = foodItems
  .filter(item => item !== "🥕")
  .map(item => item + "✨");

// З об'єктами
const items = [
  { name: "🍎", type: "fruit" },
  { name: "🥕", type: "vegetable" }
];
const fruits = items.filter(item => item.type === "fruit");