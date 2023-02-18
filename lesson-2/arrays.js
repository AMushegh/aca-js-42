const numbers = [1, 2, 4, 5, 6, 7, 8, 9];
const numbers2 = numbers;

console.log([] === []); // false
console.log([] == []); //false

const arr = [1, 2, 4];
const arr2 = arr;
const arr3 = [1, 2, 4];

console.log(arr === arr2); //true
console.log(arr == arr3); //false

/// ----------------

console.log("length", numbers.length); // 8
console.log(numbers[numbers.length - 1]);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
console.log("------------------------------------");

for (let number of numbers) {
  console.log(number);
}
