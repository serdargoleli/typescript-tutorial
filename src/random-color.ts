const hexColors: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

function getColor(): string {
  let index: number = 0,
    color: string = "";
  for (index; index < 6; index++) {
    color += hexColors[Math.floor(Math.random() * (hexColors.length - 1))];
  }
  return "#" + color;
}

console.log(getColor());
