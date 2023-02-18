// variables
var num = 10;

let str = "adwoajk";

const arr = 77;

// data types

// primitive types
// number
// string
// boolean
// null
// undefined
// symbol
// bigint

// referance types
// object

1 + 3;
"text1" + "text2";
true * 2;

// conditional statements
// 1) if/else
// 2) switch/case
// 3) ternary operator

const statement = 5 > 8; // false

// if else
if (statement) {
  console.log("Yes", "if");
} else {
  if (false) {
    console.log("No", "else");
  } else {
    ("here"); // will end up here
  }
}

// switch/case
let firstName = "Mushegh";

switch (firstName) {
  case "Mushegh":
    console.log("1");
    break;

  case "John":
    console.log("2");
    break;

  default:
    console.log("nothing found");
    break;
}

// ternary operator
console.log(true ? "ternary 1" : "ternary 2");
