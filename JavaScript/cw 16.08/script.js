// Задание 1
/*const count = prompt("Введите количество ",0);

let i = 0;

while (i<count) {
    alert("#");
    i++;
}

// Задание 2
let num = prompt("Введите число от 1 до 9",0);

while (num>=0) {
alert(num);
num--;
}

// Задание 3 

const num = prompt("Введите число",0);
let degree = prompt("Введите степень",0);

let result = 1;

while (degree>0) {
    result = result*num;
    degree--
};
alert (result);
*/
// Задание 4

const a = prompt("Введите число 1",0);
const b = prompt("Введите число 2", 0);

let i = a>b ? b:a;
let result = "";
while (i>0) {
if (!(a%i) && !(b%i)) {
result = result ? `${result}, ${i}` : i;
}
i--
}
alert (result);