import { data6 } from "./input1.js";
// const input = `123 328  51 64 
//  45 64  387 23 
//   6 98  215 314
// *   +   *   +  `;

const data = {};
const operation = {};

const main = data6.split("\n").map((x) => x.split(" ").filter((x) => x !== "").map(x => isNaN(+x) ? x : +x));
console.log(main);

for (const i of main) {
  const operand = i;
  for (let j = 0; j < operand.length; j++) {
    if (!data[j]) data[j] = [];
    if (operand[j] === "*" || operand[j] === "+") {
      if (!operation[j]) operation[j] = [];
      operation[j].push(operand[j]);
      continue;
    }

    data[j].push(operand[j]);
  }
}

const functions = {"+" : (sum, value) => sum + value,
"*" : (product, value) => product * value}
let sum = 0;

for (const i in operation) {
  while (operation[i].length > 0) {
    const operator = functions[operation[i].pop()];
    sum+= data[i].reduce(operator)

  }
}
console.log(sum);

console.log(data);
console.log(operation);
