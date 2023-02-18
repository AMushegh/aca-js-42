const array = [1, 2, 3, 4, 5, 6];

const res = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    res.push(array[i]);
  }
}

console.log(res);
