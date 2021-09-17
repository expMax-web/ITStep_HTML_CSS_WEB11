const someData = {
  one: "1",
  two: {
    three: "foo",
    info: [1, 2, 3],
  },
};

const someDataSerialized = JSON.stringify(someData);
console.log(someDataSerialized);

localStorage.setItem("someData", someDataSerialized);

console.log(someDataSerialized);

const oldData = localStorage.getItem("someData");

console.log(JSON.parse(oldData));
localStorage.removeItem("someData");
