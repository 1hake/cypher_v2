const colors = ["#fe0204", "#433Df5", "#00FFBE", "white"];

export function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
