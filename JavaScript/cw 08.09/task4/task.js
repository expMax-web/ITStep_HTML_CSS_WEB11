const paletteContainer = document.getElementById("paletteContainer");
const textContainer = document.getElementById("text");

const pallete = [];
let str = "";
while (pallete.length < 5) {
  pallete.push(
    `rgb (${Math.floor(Math.random() * 257)}, ${Math.floor(
      Math.random() * 257
    )}, ${Math.floor(Math.random() * 257)})`
  );
}

const buttonListGtml = pallete.map((color) => {
  `<button>`;
});

paletteContainer.addEventListener("click", (event) => {
  console.log(event.target.dataset.color);
  textContainer.style = `color:${event.target.dataset.color}`;
});
