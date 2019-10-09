// definiranje številk
var x = 6;
var y = 8;

console.log(x, y, x + y);
console.log(x, y, x - y);

// definiranje besed
var z = "To je beseda";
var u = "To je neaslednja beseda";

// izpisovanje v konzolo
console.log(z);
console.log(u);
console.log("Vsota", x, "+", y, "=", x + y);
console.log(`Vsota ${x} + ${y} = ${x + y}`);

// dostop do črke v besedi
console.log(`Črka na 1. poziciji je ${z[0]}`);
console.log(`Dolžina besede z je ${z.length}`);

// spisek beseda
spisek = [1, "test", 4.6, "testing"];
console.log(spisek);
console.log(console);

// slovar
var kovcek = {
  0: "Index 0",
  1: "Index 1",
  "velikost": [1, 2, 3, 4, 5, 6],
  "barva": {
    "moja": "bela",
    "tvoja": "modra"
  },
  "lastnik": "Urban P",
  "to je": "ključ"
};
console.log(kovcek);
console.log(kovcek.barva);
console.log(kovcek["to je"]);
console.log(kovcek[0]);
console.log(kovcek[1]);
console.log(`Tvoja barva ${kovcek.barva.tvoja}`);
console.log(kovcek.velikost[2]);
console.clear();

// ponavljanje
console.log("Začetek-------------");
var vsota = 0;
for (var i = 0; i < 5; i++) {
  var stevilo = Number(prompt("Vnesi število: "));
  console.log(stevilo);
  vsota += stevilo;
  console.log(stevilo, vsota);
}

console.log("Konec---------------");

function pretvorbaStopinj() {
  var stopinje = prompt("Vnesi stopinje");
  alert(stopinje);
  console.log("Testiranje v konzoli");
  console.error("Primer napake");
}
