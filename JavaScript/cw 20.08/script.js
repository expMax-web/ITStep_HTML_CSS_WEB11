//Задание 1
/*
function CompareNumber(a, b) {
  return a > b ? b : a;
}

console.log(CompareNumber(1, 2));

//Задание 2

function RaisesNumber(num, degree) {
  let result = 1;
  for (let i = 0; i < degree; i++) {
    result = result * num;
  }
  return result;
}

console.log(RaisesNumber(4, 2));
console.log(RaisesNumber(7, 2));
console.log(RaisesNumber(3, 3));


//Задание 3

function calc(num1, num2, sign) {
  let result = 0;
  if (sign === "-") {
    result = num1 - num2;
  } else if (sign === "+") {
    result = num1 + num2;
  } else if (sign === "*") {
    result = num1 * num2;
  } else if (sign === "/") {
    result = num1 / num2;
  }
  return result;
}

console.log(calc(4, 2, "-"));
console.log(calc(7, 2, "+"));
console.log(calc(3, 3, "*"));
console.log(calc(3, 3, "/"));


//Задание 4

function NumberCheck(num) {
  let result = "Число простое";
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result = "Число составное";
      break;
    }
  }
  return result;
}

console.log(NumberCheck(102));


//Задание 5

function MultiplicationTable(num) {
  let table = " ";
  for (let i = 1; i < 10; i++) {
    table = `${table}${"\n"}${num}×${i}=${num * i}`;
  }
  return table;
}
for (let i = 2; i < 10; i++) {
  console.log(MultiplicationTable(i));
}*/

//Задание 6

function RemainderDivision(num1, num2) {}
