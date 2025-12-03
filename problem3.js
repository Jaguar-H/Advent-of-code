const x = 1;
const y = 1;
const instructions = Deno.readTextFileSync("instructions.txt").split("\n");
// const instructions = ["R8,U5,L5,D3",
//    "U7,R6,D4,L4"];

const position = [];
for (const j of instructions) {
  let newx = x;
  let newy = y;
  let step = 0
  const pos = [];
  for (const i of j.split(",")) {
    let val = 0;
    switch (i[0]) {
      case "R":
        val = +i.slice(1);
        for (let i = 1; i <= val; i++) {
          step += 1;
          newx += 1;
          pos.push([newx, newy,step]);
        }
        break;
      case "L":
        val = +i.slice(1);

        for (let i = 0; i < val; i++) {
          step += 1;
          newx -= 1;
          pos.push([newx, newy,step]);
        }
        break;
      case "U":
        val = +i.slice(1);
        for (let i = 0; i < val; i++) {
          step += 1;
          newy += 1;
          pos.push([newx, newy,step]);
        }
        break;
      case "D":
        val = +i.slice(1);
        for (let i = 0; i < val; i++) {
          step += 1;
          newy -= 1;
          pos.push([newx, newy,step]);
        }
        break;
    }
  }
  position.push(pos);
}

console.log(position);

const findDistance = ([fx, fy]) => Math.abs(1 - +fx) + Math.abs(1 - +fy);

let closestSteps = Infinity;

for (const i of position[0]) {
  for (const j of position[1]) {
    if (i[0] === j[0] && i[1] === j[1]) {
      // const distance = findDistance(j);
      
      closestSteps = closestSteps > j[2] + i[2] ? j[2] + i[2] : closestSteps;
    }
  }
}

console.log(closestSteps);
