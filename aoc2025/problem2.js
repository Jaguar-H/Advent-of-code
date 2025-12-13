import { data2 } from "./input1.js";
const input = data2.split(",");
// const input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
// 1698522-1698528,446443-446449,38593856-38593862,565653-565659,
// 824824821-824824827,2121212118-2121212124`.split(",");
let sum = 0;

function isSymmetric(num) {
  const L = num.length;
  if (L % 2 !== 0) return false;
  return num.slice(0, L / 2) === num.slice(L / 2);
}

function isRepeatedPattern(num) {
  const L = num.length;

  for (let chunk = 1; chunk <= L / 2; chunk++) {
    if (L % chunk !== 0) continue;

    const piece = num.slice(0, chunk);
    const repeated = piece.repeat(L / chunk);

    if (repeated === num) {
      if (L / chunk >= 2) return true;
    }
  }

  return false;
}

function findInvalidId(range) {
  const [start, end] = range.split("-").map(Number);

  for (let i = start; i <= end; i++) {
    const num = String(i);

    if (isSymmetric(num) || isRepeatedPattern(num)) {
      sum += i;
    }
  }
}

input.forEach(r => findInvalidId(r));

console.log(sum);

