import { equal } from "jsr:@std/assert";
import { data8 } from "./input1.js";

const input = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`;

const data = data8.split("\n").map((x) => x.split(",").map(Number));
const distances = [];

for (let i = 0; i < data.length; i++) {
  for (let j = i + 1; j < data.length; j++) {
    const [x1, y1, z1] = data[i];
    const [x2, y2, z2] = data[j];
    const distance = ((x2 - x1) ** 2) + ((y2 - y1) ** 2) + ((z2 - z1) ** 2);
    distances.push({ point1: data[i], point2: data[j], distance });
  }
}

distances.sort((a, b) => a.distance - b.distance);

const circuits = [];

const inCircuits = (point1, point2) => {
  for (const i of circuits) {
    let p1 = false;
    let p2 = false;
    for (const j of i) {
      if (equal(point1, j)) p1 = true;
      if (equal(point2, j)) p2 = true;
      if (p1 && p2) return true;
    }
  }
  return false;
};

const inCircuit = (point) => {
  for (const i of circuits) {
    for (const j of i) {
      if (equal(point, j)) return true;
    }
  }
  return false;
};

const getIndex = (point) => {
  for (let i = 0; i < circuits.length; i++) {
    for (let j = 0; j < circuits[i].length; j++) {
      if (equal(point, circuits[i][j])) return i;
    }
  }
  return -1;
};

const haveToMerge = (point1, point2) => {
  const i1 = getIndex(point1);
  const i2 = getIndex(point2);
  if (i1 !== i2 && (i1 > -1) && (i2 > -1)) {
    circuits[i1].push(...circuits[i2]);
    circuits[i2] = [];
    return true;
  }
  return false;
};

const isOneCircuit = () => circuits.some((x) => x.length === data.length);
const itrator = distances.values();

let p1 = 0
let p2 = 0
let i = 0;

while (true) {
  if (isOneCircuit()) {
    
    const [x1] = p1;
    const [x2] = p2;
    console.log(x1 * x2);
    break;
  }
  const {value} = itrator.next();
  const {point1,point2} = value

  p1 = point1
  p2 = point2

  if (haveToMerge(point1, point2)) continue;
  if (inCircuits(point1, point2)) continue;

  if (inCircuit(point1)) {
    const index = getIndex(point1);
    circuits[index].push(point2);
    continue;
  }
  if (inCircuit(point2)) {
    const index = getIndex(point2);
    circuits[index].push(point1);
    continue;
  }

  circuits.push([point1, point2]);
}

// console.log(
//   circuits.map((x) => x.length).sort((a, b) => b - a).slice(0, 3).reduce((
//     mul,
//     x,
//   ) => mul * x),
// );
