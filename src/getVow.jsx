export const vow = {
  a: "#ef9a9a",
  i: "#f48fb1",
  é: "#ce93d8",
  è: "#b39ddb",
  eu: "#81d4fa",
  o: "#b5a142",
  ou: "#ffcc80",
  u: "#a5d6a7",
  in: "#ffab91",
  an: "#80cbc4",
  on: "#b0bec5"
};

export function getPattern(n) {
  return getRandom(Object.keys(vow), n);
}

function getRandom(arr, n) {
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
