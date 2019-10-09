function pretvorbaStopinj() {
  var stopinje = Number(document.getElementById("stopinje").value) * 1.8 + 32;
  document.getElementById("rezultat")
    .innerHTML = `Rezultat je: ${stopinje}°F`;
}

function zapravi() {
  var kolicina = Number(prompt("Vnsei količino, ki jo želiš zapravit:"));
  kovcek.zapravi(kolicina);
  console.log(`V kovčku je še ${kovcek.denar}€`);
}

function shrani() {
  var kolicina = Number(prompt("Vnsei količino, ki jo želiš shraniti:"));
  kovcek.shrani(kolicina);
  document.getElementById("znesek").innerHTML = `V kovčku je ${kovcek.denar}€`;
  console.log(`V kovčku je še ${kovcek.denar}€`);
}

function dodajHtml() {
  var div = document.getElementById("dodajhtml");
  div.innerHTML += `<p>Jaz sem nov odstavek</p>`;
}

async function flixbus() {
  var odhodi = document.getElementById("flixbus-odhodi");
  var trenutniDatum = new Date();
  console.log(trenutniDatum);
  console.log(trenutniDatum.toLocaleDateString());
  var d = new Date();
  d.setHours(d.getHours() + 2);
  var response = await fetch(`https://whereismy.flixbus.com/api/v1/rides/sl/2235/2019-10-09T11:30:21Z/2019-10-09T21:30:21Z`);
  var json = await response.json();
  console.log(json.timetable.departures);

  var deps = json.timetable.departures;
  //odhodi.innerHTML = json;
  for (var i = 0; i < deps.length; i++) {
    var dep = deps[i];
    var pozen = "Ni zamude";
    if (dep.station_ride_message != undefined) {
      pozen = dep.station_ride_message;
    }
    odhodi.innerHTML += `
    <tr>
      <td>${dep.through_the_stations}</td>
      <td>${dep.line_code}</td>
      <td>${pozen}</td>
    </tr>
    `;
    console.log(dep.through_the_stations, dep.line_code, dep.station_ride_message);
  }
}


async function poisciVice() {
  var tabelaVicov = document.getElementById("vici");
  var query = document.getElementById("searchWord").value;
  var response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
  var json = await response.json();
  var vici = json.result;
  for (var i = 0; i < vici.length; i++) {
    var vic = vici[i];
    tabelaVicov.innerHTML += `
      <tr>
        <td><img src="${vic.icon_url}"></td>
        <td><p>${vic.value}</p></td>
      <tr>
    `
  }
}

async function randomVic() {
  var response = await fetch(`https://api.chucknorris.io/jokes/random`);
  var json = await response.json();

  var vic = json;
  document.getElementById("prostor-za-vic").innerHTML = `<p>${vic.value}</p>`
}
