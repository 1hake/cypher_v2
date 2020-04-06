const colors = ["#fe0204", "#433Df5", "#00FFBE", "white"];

export function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
