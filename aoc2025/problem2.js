// import { data2 } from "./input1.js";
const input = `824-1475,967620-1012917,2727216511-2727316897,56345-141494,8811120-8999774,5727326-5922513,935306-961989,76751455-76787170,723458-849157,144648-162230,1597-3207,326085-472746,14-34,66-132,9453977670-9454023729,959903262-960027272,17168-26699,190-332,3351-5602,1-11,371280315-371448887,6252062-6312899,9696887156-9697040132,37-58,32770-52161,6443650762-6443689882,473092-582157,3309726-3347079,852735-912990,8294840594-8294926063,3773964-3884030,7718304-7809359,601947-677833,3434304207-3434405118,449-673,64525269-64702774,31545468-31784543,184451-308951,5771-11485`.split(",");
// const input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
// 1698522-1698528,446443-446449,38593856-38593862,565653-565659,
// 824824821-824824827,2121212118-2121212124`.split(",");
let sum = 0;

function isSymmetric(num) {
  const L = num.length;
  if (L & 1) return false;
  return num.slice(0, L / 2) === num.slice(L / 2);
}

function isRepeatedPattern(num) {
  const L = num.length;

  for (let chunk = 1; chunk <= L / 2; chunk++) {
    if (L % chunk !== 0) continue;

    const piece = num.slice(0, chunk);
    const repeated = piece.repeat(L / chunk);
x
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

