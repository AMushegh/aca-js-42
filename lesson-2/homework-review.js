// exercise 1

const arr = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 5]; // 3
//arr.indexOf(1) ---> 0
//arr.lastIndexOf(1) ---> 1

for (let i = 0; i < arr.length; ++i) {
  if (arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])) {
    // console.log(arr[i]);
    break;
  }
}

// exercise 2

const arr2 = [1, 3, 5, 2, 5, 3, 76, 0, -2, -5];

let max = arr2[0];
for (let i = 0; i < arr2.length; ++i) {
  if (arr2[i] > max) {
    max = arr2[i];
  }
}

console.log(max);

// exercise 3

const arr3 = [1, 3, 5, 2, 5, 3, 76, 0, -2, -5];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 !== 0) {
    //....
  } else {
    //...
  }
}

// exercise 4

// typeof 5 ---> "number"
// typeof 'str' ---> "string"

// exercise 5

function evenFrom(a, b) {
  let start = a % 2 === 0 ? a + 2 : a + 1;

  const even = [];
  for (let i = start; i < b; i += 2) {
    even.push(i);
  }
}

// Math.floor()
// Math.round()
// Math.trunc()
