import { data6 } from "./input1.js";
const data = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +`;

const run = (index, line) => {
  while (index <= line.length) {
    if (index === line.length) return index + 1;
    if (line[index] === " ") return index;
    index++;
  }
  return -1;
};

let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

const main = data6.split("\n");
const parsedData = [];

while (true) {
  const i1 = run(index1, main[0]);
  const i2 = run(index2, main[1]);
  const i3 = run(index3, main[2]);
  const i4 = run(index4, main[3]);

  const max = Math.max(i1, i2, i3, i4);
  if (max === -1) break;
  console.log({index1,max});
  
  const a = main[0].slice(index1, max);
  const b = main[1].slice(index2, max);
  const c = main[2].slice(index3, max);
  const d = main[3].slice(index4, max);
  const o = main[4].slice(index1, max);
  index1 = max + 1;
  index2 = max + 1;
  index3 = max + 1;
  index4 = max + 1;
  console.log([a,b,c,d,o]);
  
  parsedData.push([a, b, c, d, o]);
}

const functions = {
  "+": (sum, value) => sum + value,
  "*": (product, value) => product * value,
};

const fetchData = (data) => {
  const operands = [];
  let operation = "";
  for (let i = 0; i < data[0].length; i++) {
    let operand = "";
    for (const j of data) {
      console.log(j);

      if (j.trim() == "+" || j.trim() === "*") {
        operation = j;
        continue;
      }
      operand += j[i];
    }

    operands.push(+(operand.trim()));
  }

  // console.log([operands, operation]);

  return [operands, functions[operation.trim()]];
};
let sum = 0;

// parsedData.forEach(x=>console.log(x,"ji "))

for (const i of parsedData) {
  console.log(i);

  const [operands, operation] = fetchData(i);
  sum += operands.reduce(operation);
}

console.log(sum);
