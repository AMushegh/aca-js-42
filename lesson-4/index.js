const arr = [1, 2, 3, 4, 5, 6];

// map
const newArr = arr.map((v) => {
  return v + 3;
});

// filter // callback will convert return value to boolean
const filteredArr = arr.filter(function (v, i, a) {
  return i === a.indexOf(v);
});

// some
const someEquals10 = arr.some(function (v) {
  return v === 10;
});

// every
const everythingEquals10 = arr.every(function (v) {
  return v === 10;
});

// reduce
// const arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce(function (acc, value) {
  return acc + value;
});

const FRUITS = ["apple", "banana", "apple", "cherry", "cherry", "cherry"];

const listFromReduce = FRUITS.reduce(function (acc, fruit) {
  if (acc[fruit]) {
    acc[fruit] += 1;
  } else {
    acc[fruit] = 1;
  }

  return acc;
}, {});

function getList() {
  let acc = {};
  for (let fruit of FRUITS) {
    if (acc[fruit]) {
      acc[fruit] += 1;
    } else {
      acc[fruit] = 1;
    }
  }
  return acc;
}

const peoples = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 25 },
];

const groupedByAges = peoples.reduce(function (acc, people) {
  if (acc[people.age]) {
    acc[people.age].push(people);
  } else {
    acc[people.age] = [people];
  }
  return acc;
}, {});

console.log(groupedByAges);
