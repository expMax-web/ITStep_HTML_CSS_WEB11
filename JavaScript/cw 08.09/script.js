// const clicker = document.getElementById("cliker");

// // const onClick = () => {
// //   console.log("Click!");
// // };

// const onClick = (event) => {
//   console.log(event);
// };

// clicker.addEventListener("click", onClick);

// document.addEventListener("contextmenu", (event) => {
//   event.preventDefault();
// });

console.log(counterValue);

const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

incrementButton.addEventListener("click", () => {
  const counterValueNode = document.getElementById("counterValue");
  const counterValue = Number(counterValueNode.innerText);
  counterValueNode.innerText = counterValue + 1;
});

decrementButton.addEventListener("click", () => {
  const counterValueNode = document.getElementById("counterValue");
  const counterValue = Number(counterValueNode.innerText);
  counterValueNode.innerText = counterValue - 1;
});

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.key === "ArrowUp") {
    const counterValueNode = document.getElementById("counterValue");
    const counterValue = Number(counterValueNode.innerText);
    counterValueNode.innerText = counterValue + 1;
  }
  if (event.key === "ArrowDown") {
    const counterValueNode = document.getElementById("counterValue");
    const counterValue = Number(counterValueNode.innerText);
    counterValueNode.innerText = counterValue - 1;
  }
  console.log(event);
});
