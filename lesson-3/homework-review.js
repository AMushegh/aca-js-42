// exercise 1
let arr = [1, 2, 3, 4];
let arr1 = [1, 2, 3, 4, 5];

function getIntersection(arr1, arr2) {
  const res = [];

  for (let i = 0; i < arr1.length; ++i) {
    let item = arr1[i];

    if (arr2.includes(item)) {
      res.push(item);
    }
  }

  return res;
}

console.log(getIntersection(arr, arr1));

// exercise 4

// one function - one action
function customTransform(num, n) {
  return num % 2 === 0 ? num + -2 * n : num + 2 * n;
}

function transformTimes(arr, n) {
  const res = [];
  for (let i = 0; i < arr.length; ++i) {
    res.push(customTransform(arr[i], n));
  }
  return res;
}

console.log(transformTimes([3, 4, 9], 3));
console.log(transformTimes([0, 0, 0], 10));

//exercise 5

function transform(num) {
  return num % 2 === 0 ? num ** 2 : Math.sqrt(num);
}

function getTransformedSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += transform(arr[i]);
  }

  return sum.toFixed(2);
}

console.log(getTransformedSum([1, 3, 3, 1, 10]));
console.log(getTransformedSum([2, 3, 4, 5]));

// exercise 6

function getAccSum(arr) {
  if (!arr.length) {
    return [];
  }

  let sum = arr[0];
  let res = [arr[0]];
  for (let i = 1; i < arr.length; ++i) {
    sum += arr[i];
    res.push(sum);
  }

  return res;
}

const a = getAccSum([1, 0, 1, 0, 1]);
console.log(a);
