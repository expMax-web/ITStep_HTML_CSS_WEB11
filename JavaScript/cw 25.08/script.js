/*let student = new Object();
student ["Name"] = "Vasya";
student ["Age"] = "23";

console.log(student.Name,student ["Age"]);

let student = new Object
{
Name = "Vasya"
Age = 23
};

let student = {     // объект
    Name: "Vasya",  // под ключом "name" хранится значение "John"
    Age: 30        // под ключом "age" хранится значение 30
  };

console.log(student);
let student1 = {    
    Name: "Vasya",  
    Age: 30        
  };

let student2 = {    
    Name: "Petya",  
    Age: 28        
  };

let student3 = {    
    Name: "Ivan",  
    Age: 25        
  };

let array = [student1, student2, student3];

function checkStudent (array) {
  let result = "";
  for (i=0; i<array.length; i++){
    result = `student1-${student1}`
  }
  return result;
}

console.log(checkStudent(array));

*/

//Задание 1 

let rectangle = 
{
LTpointx: 2,
LTpointy: 10,
RBpointx: 25,
RBpointy: 1
}
//Вывод координат
function ShowrRectanglePoints (obj) {
return(`Левая точка - x = ${obj.LTpointx}, y = ${obj.LTpointy} \n
Правая точка - x = ${obj.RBpointx}, y = ${obj.RBpointy}`);
}

console.log(ShowrRectanglePoints(rectangle));
//Нахождение ширины
function widthRectangle (obj) {
  return Math.abs(obj.LTpointx-obj.RBpointx);
}
console.log(widthRectangle(rectangle));
//Нахождение высоты
function heightRectangle (obj) {
  return Math.abs(obj.LTpointy-obj.RBpointy);
}
console.log(heightRectangle(rectangle));

//Нахождение площади 
function CalcArea (obj) {
  return Math.abs(obj.LTpointx-obj.RBpointx)*Math.abs(obj.LTpointy-obj.RBpointy);
}
console.log(CalcArea(rectangle));

//Нахождение периметра
function CalcPerimeter (obj) {
  return Math.abs(obj.LTpointx-obj.RBpointx)*2+Math.abs(obj.LTpointy-obj.RBpointy)*2;
}
console.log(CalcPerimeter(rectangle));

//Изменение ширины прямоугольника

function changeWidth (obj, b) {
  return obj = {RBpointx+b}
}

function changeHeight (obj, b) {
  return obj = {RBpointy:(RBpointy+b)}
}

function changeWidthHeight (obj, a, b) {
  return obj = {RBpointx:(RBpointx+a),
    RBpointy:(RBpointy+b)
  }
}

changeWidth(rectangle, 2);

console.log(rectangle);