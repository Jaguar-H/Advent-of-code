import { data } from "./input1.js";
const instructions =  data.split("\n")

let pointer = 50;
let counter = 0

const right = (rotations) => {
  for (let i = 0; i < rotations; i++) {
    pointer += 1;
    if (pointer > 99)pointer = 0
    if (pointer === 0)++counter
  }
};
const left = (rotations) => {
  for (let i = 0; i < rotations; i++) {
    pointer -= 1;
    if (pointer < 0)pointer = 99
    if (pointer === 0)++counter
  }
};

for(const i of instructions){
  const instruction = i.split("")
  const [direction] = [...instruction.splice(0,1)]
  const rotations = +instruction.join("")
  if (direction === "L") left(rotations)
  if (direction === "R") right(rotations)
}
console.log(counter);
