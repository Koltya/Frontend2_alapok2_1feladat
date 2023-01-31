const names = [
  "István",
  "Katalin",
  "Attila",
  "Gábor",
  "Péter",
  "Anna",
  "Kitti",
];

//while ciklussal vizsgáljuk a tömb elemét, mivel feltételeztük, hogy egy Gábor van a tömbben
function whereIsGabor(array) {
  let i = 0;
  while (array[i] !== "Gábor") {
    i++;
  }
  i += 1;
  console.log("A megadott tömb tartalmazza a Gábor nevet a " + i + ". helyen.");
}

whereIsGabor(names);
