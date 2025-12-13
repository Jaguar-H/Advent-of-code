const input = Deno.readTextFileSync("input.txt").split("\n").map((x) => +x);
console.log(input);

const values = []

for (let i = 0; i < input.length - 2; i++){
  console.log([input[i] , input[i + 1], input[i + 2]]);
  
  values.push(input[i] + input[i + 1]+ input[i + 2])
}
console.log(values.reduce((inc, ele, i) => ele > values[i - 1] ? ++inc : inc, 0));
