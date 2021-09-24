let RobotMorty = await fetch("https://rickandmortyapi.com/api/character/298");
const BlockContainer = document.getElementById("container");

let RobotMortyJSON;

if (RobotMorty.ok) {
  RobotMortyJSON = await RobotMorty.json();
} else {
  alert("Ошибка HTTP: " + RobotMorty.status);
}

console.log(RobotMortyJSON);

BlockContainer.innerHTML = `<figure><img src="${RobotMortyJSON.image}" alt="" /><figcaption>${RobotMortyJSON.name}</figcaption></figure><p>Status - ${RobotMortyJSON.status}</p><p>Species - ${RobotMortyJSON.species}</p>`;
