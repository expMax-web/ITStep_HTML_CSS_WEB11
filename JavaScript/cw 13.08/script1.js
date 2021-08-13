//Задание 1
/*
const num = prompt("Введите число");

if (num > 0) {
    alert("Число положительное");
} else if (num < 0) {
        alert("Число отрицательное");
    } else {
        alert("Число равно нулю");
    }*/

//Задание 2

/*const age = prompt ("Введите Ваш возраст",0)

if (age<0 || age>120) {
    alert("Вы указали некорректный возраст!!!")
} */
//Задание 3
/*const foo = Number(prompt("Введите число",0))

if (foo<0) {
    alert(-foo)
} else if (foo>0) {
    alert(foo)
}*/

//Задание 4

/*const hour = Number(prompt("Введите время в часах",0));
const minute = Number(prompt("Введите время в минутах",0));
const second = Number(prompt("Введите время в секундах",0));

if (hour<0||hour>23) {
    alert("Вы ввели некорректное время")
} else if (minute<0||minute>59) {
    alert("Вы ввели некорректное время")
} else if (second<0||second>59) {
    alert("Вы ввели некорректное время")
} else {
    alert(`Все ок!!! ${hour} час: ${minute} минута: ${second} сек.`)
} */

//Задание 5
const x = Number(prompt("Введите значение Х",0));
const y = Number(prompt("Введите значение Y",0));
 
if (x>0 && y>0) {
    alert("Номер четверти - 1")
} else if (x>0 && y<0) {
    alert("Номер четверти - 2")
} else if (x<0 && y<0) {
    alert("Номер четверти - 3")
} else if (x<0 && y>0) {
    alert("Номер четверти - 4")
} 
else if (x===0 && y===0) {
    alert("Точка лежит в начале координат")
} else if (x===0) {
    alert("Точка лежит в на оси Y")
} else if (y===0) {
    alert("Точка лежит в на оси X")
};