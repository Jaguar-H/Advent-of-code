import { data5 } from "./input1.js";
// const input = `3-5
//     10-14
//     16-20
//     12-18
//     1-3
//     19-21
//     5-13
//     14-26
//     12-14

//     1
//     5
//     8
//     11
//     17
//     32`;
const input = data5;

// const [ranges,ids] = input.split("\n\n").map(x => x.split("\n"))
// console.log({ranges,ids});

// let fresh = 0

// for(let i of ids){
//   for (let j of ranges) {
//     const [min,max] = j.split("-")
//     fresh += ((+min <= +i) && (+i <= +max)) ? 1 : 0
//     if((+min <= +i) && (+i <= +max)){
//       console.log(i,{min,max});

//       break
//     }

//   }
// }
// console.log(fresh);

const [ranges] = input.split("\n\n").map((x) =>
  x.split("\n").map((x) => {
    const [a, b] = x.split("-");
    return [+a, +b];
  })
);
ranges.sort((a, b) => a[0] - b[0]);
console.log(ranges);

let previousMax = ranges[0][1];
let sum = (ranges[0][1] - ranges[0][0]) + 1;

for (const i of ranges) {
  const [min, max] = i;
  if (min > previousMax) {
    sum += (max - min) + 1;
    previousMax = max;
    continue;
  }
  const extra = Math.max(0, max - previousMax);
  sum += extra;
  previousMax = Math.max(previousMax, max);
}
console.log(sum);
