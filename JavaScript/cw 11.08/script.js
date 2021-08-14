//Задание 1
/*let number = prompt("Введите число");
alert(number * number)*/

//Задание 2
/*let first = prompt ("Введите первое число", 0);
let second = prompt ("Введите второе число", 0);
let summ = Number(first) + Number(second);
alert (summ)
alert (summ / 2);*/

//Задание 3 
/*let side = prompt ("Введите сторону квадрата", 0)
let square = Number(side) * Number(side)
alert ("Площадь квадрата: " + square)*/

//Задание 4 
/*let km = prompt ("Введите значение в километрах:", 0);
const mile = Number(0.621371);
let kmmile = Number(km) * Number(mile);
alert ("Запрашиваемое расстояние в милях: " + kmmile);*/

//Задание 5
/*let first = prompt ('Введите первое число', 0);
let second = prompt ('Введите второе число', 0);
let summ = Number (first) + Number (second);
let subtraction = Number (first) - Number (second);
let multiplication = Number (first) * Number (second);
let division = Number (first) / Number (second);
alert (`Результаты: сложение - ${summ}, вычитание - ${subtraction}, умножение - ${multiplication}, деление - ${division},`)*/

//Задание 6
/*alert ("Введите значения a и b, для формулы: a*x+b=0");
let a = prompt ("Введите значение a",0);
let b = prompt ("Введите значение b",0);
let x = -Number(b) / Number(a);
alert (`Результат: x = ${x}`);*/

//Задание 7
let hour = prompt ("Сколько часов", 0);
let minute = prompt ("Сколько минут", 0);
let rest_hours = (24 - Number(hour))
let rest_minute = (60 - Number(minute))
alert (`Осталось жить: ${rest_hours} часов : ${rest_minute} минут `)