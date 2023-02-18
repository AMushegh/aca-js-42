// loops, for, while, do while

// for (console.log("dafwjalwkj"); i < 11; i++) {
for (let i = 0; i < 11; i++) {
  i;
}
// for (a; b; c){d}
// 1) works a, goes to 2
// 2) works b, if true go to 3, else end loop
// 3) works d, goes to 4
// 4) works c and goes to 2

// while
let j = 0;
while (j > 10) {
  console.log(j + ", printed from while");
  j++;
}

let k = 0;
do {
  console.log(k + ", printed from do while");
  k++;
} while (k > 10);
