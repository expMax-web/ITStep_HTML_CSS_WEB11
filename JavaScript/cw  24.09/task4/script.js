let isDrag = false;

const movingPointer = document.getElementById("movingPointer");
const travelLine = document.getElementById("track");
const travelLineCoord = getCoords(travelLine);

movingPointer.addEventListener("mousedown", (e) => {
  isDrag = true;
});

document.addEventListener("mouseup", (e) => {
  isDrag = false;
});

document.addEventListener("mousemove", (e) => {
  e.preventDefault();
  let movingPointerCoord = e.clientX - travelLineCoord.left;
  if (movingPointerCoord < 0) {
    movingPointerCoord = 0;
  }
  if (movingPointerCoord + movingPointer.offsetWidth > travelLine.offsetWidth) {
    movingPointerCoord = travelLine.offsetWidth - movingPointer.offsetWidth;
  }
  if (isDrag) {
    movingPointer.style.left = movingPointerCoord + "px";
  }

  console.log(movingPointerCoord);
});

function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return { left: box.left + pageXOffset, right: box.right - pageXOffset };
}
