import { permutation } from "./problem7.js";

const program = [
  3,
  26,
  1001,
  26,
  -4,
  26,
  3,
  27,
  1002,
  27,
  2,
  27,
  1,
  27,
  26,
  27,
  4,
  27,
  1001,
  28,
  -1,
  28,
  1005,
  28,
  6,
  99,
  0,
  0,
  5,
];

export function run(program, inputValue, code, ip, flag) {
  const mem = [...program];
  let inputs = 0;

  const get = (mode, idx) => mode === 0 ? mem[mem[idx]] : mem[idx];

  const modes = () => {
    const str = (mem[ip] + "").padStart(5, "0");
    return [+str[2], +str[1], +str[0]];
  };

  const ops = {
    1: () => {
      const [mode1, mode2] = modes();
      mem[mem[ip + 3]] = get(mode1, ip + 1) + get(mode2, ip + 2);
      ip += 4;
    },
    2: () => {
      const [mode1, mode2] = modes();
      mem[mem[ip + 3]] = get(mode1, ip + 1) * get(mode2, ip + 2);
      ip += 4;
    },
    3: () => {
      mem[mem[ip + 1]] = inputs === 0 ? code : inputValue;
      inputs++;
      ip += 2;
    },
    4: () => {
      const [mode1] = modes();
      const val = get(mode1, ip + 1);
      ip += 2;
      return [val, ip, false];
      // console.log(val);
    },
    5: () => {
      const [mode1, mode2] = modes();
      const val = get(mode1, ip + 1);
      ip = val !== 0 ? get(mode2, ip + 2) : ip + 3;
    },
    6: () => {
      const [mode1, mode2] = modes();
      const val = get(mode1, ip + 1);
      ip = val === 0 ? get(mode2, ip + 2) : ip + 3;
    },
    7: () => {
      const [mode1, mode2] = modes();
      const val1 = get(mode1, ip + 1);
      const val2 = get(mode2, ip + 2);
      mem[mem[ip + 3]] = val1 < val2 ? 1 : 0;
      ip += 4;
    },
    8: () => {
      const [mode1, mode2] = modes();
      const val1 = get(mode1, ip + 1);
      const val2 = get(mode2, ip + 2);
      mem[mem[ip + 3]] = val1 === val2 ? 1 : 0;
      ip += 4;
    },
  };

  while (true) {
    const opcode = mem[ip] % 100;
    if (opcode === 99) break;
    const op = ops[opcode];
    const out = op();
    if (out !== undefined) return out;
  }

  return [inputValue, ip, true];
}

const allPossiblepermutation = permutation([9, 7, 8, 5, 6]);
let maxThrust = -Infinity;

// for (const i of allPossiblepermutation) {
const amp1 = [...program];
const amp2 = [...program];
const amp3 = [...program];
const amp4 = [...program];
const amp5 = [...program];

let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;

let f1 = false;
let f2 = false;
let f3 = false;
let f4 = false;
let f5 = false;

const [a, b, c, d, e] = [9, 8, 7, 6, 5];
let out = 0;
while (!(f1 && f2 && f3 && f4 && f5)) {
  [out, i1, f1] = run(amp1, out, a, i1, f1);
  [out, i2, f2] = run(amp2, out, b, i2, f2);
  [out, i3, f3] = run(amp3, out, c, i3, f3);
  [out, i4, f4] = run(amp4, out, d, i4, f4);
  [out, i5, f5] = run(amp5, out, e, i5, f5);
  console.log(i1,i2,i3,i4,i5);
}
maxThrust = out > maxThrust ? out : maxThrust;
// }
console.log(maxThrust);
