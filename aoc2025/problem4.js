import { data4 } from "./input1.js";

// const input = data4.split("\n").map((x) => x.split(""));
const input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`.split("\n").map((x) => x.split(""));
console.log(input);

const checkIfEmpty = ([y, x], [dy, dx]) => {
  if ((y + dy) < 0 || (x + dx) < 0) return true;
  if ((y + dy) >= input.length || (x + dx) >= input[0].length) return true;
  return input[y + dy][x + dx] === "." ? true : false;
};

const adjecent = [[1, 0], [0, 1], [1, 1], [-1, 1], [-1, 0], [0, -1], [-1, -1], [
  1,
  -1,
]];

let paperRolls = 0;

const removeRolls = () => {
  while (true) {
    let rollsRemoved = 0;
    for (let y = 0; y < input.length; y++) {
      for (let x = 0; x < input[0].length; x++) {
        let rolls = 0;
        if (input[y][x] !== ".") {
          for (const i of adjecent) {
            rolls += checkIfEmpty([y, x], i) ? 0 : 1;
          }
          input[y][x] = rolls < 4 ? "." : "@";
          rollsRemoved += rolls < 4 ? 1 : 0;
        }
      }
    }
    if (rollsRemoved === 0) return;
    paperRolls += rollsRemoved;
  }
};
removeRolls()
console.log(paperRolls);
