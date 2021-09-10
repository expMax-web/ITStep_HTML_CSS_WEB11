const blockContainer = document.getElementById("block-container");
const addButton = document.getElementById("addButton");

function getRandomColor(max) {
  return Math.floor(Math.random() * max);
}

addButton.addEventListener("click", () => {
  const color = `background-color: rgb(${getRandomColor(255)},${getRandomColor(
    255
  )},${getRandomColor(255)})`;
  blockContainer.innerHTML += `<div class="color-item" style="${color}"></div>`;
});

blockContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("color-item")) {
    event.target.remove();
  }
});
