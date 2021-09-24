let multipleCharacters = await fetch(
  "https://rickandmortyapi.com/api/character/1,2,3,4"
);
const BlockContainer = document.getElementById("container");

let charactersJSON;

if (multipleCharacters.ok) {
  charactersJSON = await multipleCharacters.json();
} else {
  alert("Ошибка HTTP: " + charactersJSON.status);
}

console.log(charactersJSON);

function renderingTablecharacters(someCharacters) {
  let charactersStr;
  someCharacters.map();
}

BlockContainer.innerHTML = `<div><figure><img src="${RobotMortyJSON.image}" alt="" /><figcaption>${RobotMortyJSON.name}</figcaption></figure><p>Status - ${RobotMortyJSON.status}</p><p>Species - ${RobotMortyJSON.species}</p></div>`;
