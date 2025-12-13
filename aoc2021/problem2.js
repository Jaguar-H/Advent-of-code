const input = Deno.readTextFileSync("input2.txt").split("\n").map((x) => {
  const [a, b] = x.split(" ");
  return [a, +b];
});
// const input = `forward 5
// down 5
// forward 8
// up 3
// down 8
// forward 2`.split("\n").map((x) => {
//   const [a, b] = x.split(" ");
//   return [a, +b];
// });

const position = { x: 0, y: 0 ,aim : 0};

const updatePosition = ([instruction, move]) => {
  console.log(instruction, move, position);

  switch (instruction) {
    case "forward":
      position.x = position.x + move;
      position.y += position.aim * move
      return;
    case "up":
      position.aim = position.aim - move;
      return;

    case "down":
      position.aim = position.aim + move;
      return;
  }
};

for (const i of input) {
  updatePosition(i);
}
console.log(position.x * position.y,position);
