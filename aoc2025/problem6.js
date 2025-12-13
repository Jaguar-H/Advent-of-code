import { data6 } from "./input1.js";
const input = `123 328  51 64
45 64  387 23
6 98  215 314
*   +   *   +  `;

const max = data6.split("\n").map((x) => x.split(" ")).flatMap((x) => x);
const padLen = max.reduce((max, x) => max > x.length ? max : x.length, 0);

const main = data6.split("\n").map((x) => x.split(" ").filter((x) => x)).map((
  x
) => x.map((y,i) => i % 2  === 0 ? y.padStart(padLen) : y.padEnd(padLen)));

const functions = {
  "+": (sum, value) => sum + value,
  "*": (product, value) => product * value,
};

let sum = 0;

const part1 = () => {
  for (let i = 0; i < main[0].length; i++) {
    operands = [];

    for (let j = 0; j < main.length; j++) {
      const value = main[j][i];

      if (!isNaN(+value)) {
        operands.push(value);
        continue;
      }

      const operation = functions[value];
      sum += operands.reduce(operation);
    }
  }
};

// const input = data.split("\n").map((x) =>
//   x.split(" ").filter((x) => x).map((x, i) =>
//     i === 0 ? x.padStart(padLen) : x.padEnd(padLen)
//   )
// );

const fetchData = (num, values) => {
  const operands = [];
  let operation = "";
  for (let i = 0; i < num.length; i++) {
    let operand = "";
    for (const j of values) {
      if (isNaN(+(j.trim("")))) {
        operation = j;
        continue;
      }
      operand += j[i];
    }
    operands.push(+(operand.trim()));
  }
  return [operands, functions[operation.trim()]];
};

const getValues = (i) => {
  const values = [];
  for (let j = 0; j < main.length; j++) {
    values.push(main[j][i]);
  }
  return values;
};

const part2 = () => {
  for (let i = 0; i < main[0].length; i++) {
    const values = getValues(i);
    const [operands, operation] = fetchData(main[0][i], values);
    console.log([operands, operation]);
    console.log(operands.reduce(operation));

    sum += operands.reduce(operation);
  }
};
console.log(main);

part2();
console.log(sum);
// console.log(getMaxLen(1));

// console.log(fetchData("123", [ "123", " 45", "  6", "  *" ]));

// console.log(getValues(0));
