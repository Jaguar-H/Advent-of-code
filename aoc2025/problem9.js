import { equal } from "jsr:@std/assert";
import { data9 } from "./input1.js";
const input = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`;

const data = data9.split("\n").map((x) => {
  const [a, b] = x.split(",");
  return [+a, +b];
});
const part1 = () => {
  let largestArea = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      const [x1, y1] = data[i];
      const [x2, y2] = data[j];
      const area = (Math.abs(x2 - x1) + 1) * (Math.abs(y2 - y1) + 1);

      largestArea = Math.max(area, largestArea);
    }
  }
  console.log(largestArea);
};

const findPoints = ([x, y], [x1, y1]) => [[x1, y], [x, y1]];
const maxY = Math.max(...data.map(([_, y]) => y));
const maxX = Math.max(...data.map(([x]) => x));

const edges = [];

for (let i = 0; i < data.length; i++) {
  const a = data[i];
  const b = data[(i + 1) % data.length];
  edges.push([a, b]);
}

const isInBetween = (x, y, x1, y1, x2, y2) => {
  const maxX = Math.max(x1, x2);
  const maxY = Math.max(y1, y2);
  const minX = maxX === x1 ? x2 : x1;
  const minY = maxY === y1 ? y2 : y1;
  return (minX <= x) && (x <= maxX) && (minY <= y) && (y <= maxY);
};

const isInRange = (x, y) => {
  for (const [[x1, y1], [x2, y2]] of edges) {
    if (isInBetween(x, y, x1, y1, x2, y2)) return true;
  }
  return false;
};
const checkUp = (x, y) => {
  for (let i = y; i < maxY + 1; i++) {
    if (isInRange(x, i)) return true;
  }
  return false;
};
const checkDown = (x, y) => {
  for (let i = y; i >= 0; i--) {
    if (isInRange(x, i)) return true;
  }
  return false;
};
const checkLeft = (x, y) => {
  for (let i = x; i < maxX + 1; i++) {
    if (isInRange(i, y)) return true;
  }
  return false;
};
const checkRight = (x, y) => {
  for (let i = x; i >= 0; i--) {
    if (isInRange(i, y)) return true;
  }
};

const inBound = ([x, y]) => {
  if (isInRange(x, y)) return true;
  return checkDown(x, y) && checkUp(x, y) && checkLeft(x, y) &&
    checkRight(x, y);
};

const inBounds = (point1, point2) => inBound(point1) && inBound(point2);

const part2 = () => {
  let largestArea = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      const [x1, y1] = data[i];
      const [x2, y2] = data[j];
      if ((x1 === x2) || (y1 === y2)) continue
      const area = (Math.abs(x2 - x1) + 1) * (Math.abs(y2 - y1) + 1);
      const [point1, point2] = findPoints([x1, y1], [x2, y2]);
      if (area < largestArea) continue
      if (inBounds(point1, point2)) {
        console.log(area);
        largestArea = Math.max(area,largestArea)
      }
      
    }
  }
  console.log(largestArea);
};

part2()
// console.log(inBound([]));

// console.log(checkDown(9,3));
// console.log(checkUp(9, 3));
// console.log(checkRight(9,3));
// console.log(checkLeft(9,3));
