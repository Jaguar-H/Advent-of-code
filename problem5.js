// const input = [
// 3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
// 1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
// 999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99
// ];
const input = [3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0]
export function run(program, inputValue) {
  const mem = [...program];
  let ip = 0;
  let out = 0

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
      
      mem[mem[ip + 1]] = inputValue !== undefined ? inputValue : +prompt("enter val : ");
      ip += 2;
    },
    4: () => {
      const [mode1] = modes();
      const val = get(mode1, ip + 1);
      out = val
      // console.log(val);
      ip += 2;
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
    op();
  }
  return out
}

// console.log
// (run(input, 3))
