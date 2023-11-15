function isEnoughCapacity(products, containerSize) {
    let totalQuantity = 0;
    let y = Object.values(products);
    for (let x = 0; x < y.length; x++) { totalQuantity += y[x]};
    if (totalQuantity > containerSize) { return false; } else { return true; }
}
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false
console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 25)
); 