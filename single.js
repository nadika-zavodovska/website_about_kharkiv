let places;

function randomInt(n) {
  return Math.floor(Math.random() * n);
}

function randomMember(arr) {
  return arr[randomInt(arr.length)];
}

places = [
  "Taras Shevchenko Garden",
  "Central Park for Culture and Recreation",
  "Feldman Ecopark",
];
places.unshift("Monument of Lovers");
places.unshift("Historical Museum");
places.unshift("Kharkiv National Academic Opera and Ballet Theatre");
places.unshift("Annunciation Cathedral");
places.unshift("Sumska Street");
places.unshift("The Assumption Cathedral");

document.getElementById("choose_place").addEventListener("click", (event) => {
  let element_place_content = document.getElementById("place_content");
  element_place_content.innerText = randomMember(places);
});
