import { equal } from "jsr:@std/assert";
import { data7 } from "./input1.js";

const input = `
.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`;

const data = input.split("\n").map((x) => x.split(""));

const sPos = [0, data[0].indexOf("S")];
let count = 0;
const mon = input.split("\n").map((x) => x.split(""));

const smashed = [];

const isInShmashed = (pos) => {
  for (const i of smashed) {
    if (equal(i, pos)) return true;
  }
  return false;
};

let reality = 0;
const beams = ([y, x]) => {
  if (y >= data.length || x < 0 || x >= data.length) {
    reality++;
    return;
  }
  // mon[y][x] = "|";
  if (data[y][x] === "^") {
    mon[y][x] = "^";
    if (isInShmashed([y, x])) {
      r.push([y,x])
      return 
    }
    count++;
    
    mon[y][x - 1] = "|";
    mon[y][x + 1] = "|";

    beams([y, x - 1]);
    beams([y, x + 1]);
    return;
  }
  beams([y + 1, x]);
};

beams(sPos);
console.log(count);
mon.forEach((x,i) => console.log(String(i).padEnd(2),x.join(""))
)
console.log(reality);
// console.log(r);
// console.log(equal([1, 1], [2, 2]));
