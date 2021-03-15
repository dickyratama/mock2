let clicktype1 = document.getElementById("tombTypeA");
let clicktype1 = document.getElementById("tombTypeB");

function tombTypeA(e) {
  let numberOfStars = 3;
  for (let i = 0; i <= numberOfStars; i++) {
    let starstore = "";

    for (let j = 0; j < numberOfStars; j++) {
      starstore += "*" + "#";
    }
    console.log(starstore);
  }
}
let height = 8;
let storetHastag = "";

for (var a = 0; a < height; a++) {
  for (var b = height - a; b > 0; b--) {
    storetHastag += "#" + "*";
  }
  storetHastag += "\n";
}

console.log(storetHastag);
