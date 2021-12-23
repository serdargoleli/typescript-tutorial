const hexColors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
function getColor() {
    let index = 0, color = "";
    for (index; index < 6; index++) {
        color += hexColors[Math.floor(Math.random() * hexColors.length - 1)];
    }
    return "#" + color;
}
console.log(getColor());
