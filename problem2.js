const program = [
  1,
  99,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  1,
  10,
  19,
  2,
  9,
  19,
  23,
  2,
  23,
  10,
  27,
  1,
  6,
  27,
  31,
  1,
  31,
  6,
  35,
  2,
  35,
  10,
  39,
  1,
  39,
  5,
  43,
  2,
  6,
  43,
  47,
  2,
  47,
  10,
  51,
  1,
  51,
  6,
  55,
  1,
  55,
  6,
  59,
  1,
  9,
  59,
  63,
  1,
  63,
  9,
  67,
  1,
  67,
  6,
  71,
  2,
  71,
  13,
  75,
  1,
  75,
  5,
  79,
  1,
  79,
  9,
  83,
  2,
  6,
  83,
  87,
  1,
  87,
  5,
  91,
  2,
  6,
  91,
  95,
  1,
  95,
  9,
  99,
  2,
  6,
  99,
  103,
  1,
  5,
  103,
  107,
  1,
  6,
  107,
  111,
  1,
  111,
  10,
  115,
  2,
  115,
  13,
  119,
  1,
  119,
  6,
  123,
  1,
  123,
  2,
  127,
  1,
  127,
  5,
  0,
  99,
  2,
  14,
  0,
  0,
];

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const func = { 1: add, 2: multiply };
let index = 0;

const runProgram = (p) => {
  while (index < p.length && p[index] !== 99) {
    if (func[p[index]] !== undefined) {
      const value1 = p[p[index + 1]];
      const value2 = p[p[index + 2]];
      p[p[index + 3]] = func[p[index]](value1, value2);
      index += 4;
    }
  }
  console.log("return");
  
  return p;
};

const foo = () => {for (let i = 0; i <= 99; i++) {
  for (let j = 0; j <= 99; j = j + 1) {
    const cp = [...program]
    index = 0
    cp[1] = i;
    cp[2] = j;
    console.log(runProgram(cp));
    
    if(runProgram(cp)[0] === 19690720){
      console.log(cp[1],cp[2]);
      return ;
    
  }
}
}}
//3716250
// console.log(runProgram(program));
foo()


