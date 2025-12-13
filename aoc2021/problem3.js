const input = Deno.readTextFileSync("input3.txt").split("\n");
console.log(input);

const epsilon = [];
const gama = [];

const update = (freq) => {
  if (freq["0"] > freq["1"]) {
    epsilon.push(1);
    gama.push(0);
    return;
  }
  epsilon.push(0);
  gama.push(1);
};
for (const i in input[0]) {
  const freq = input.reduce((freq, ele) => {
    freq[ele[i]] = (freq[ele[i]] || 0) + 1;
    return freq;
  }, {});
  update(freq);
}
console.log({gama,epsilon});

const gammma = parseInt(gama.join(""),2)
const epsillon = parseInt(epsilon.join(""),2)

console.log(gammma * epsillon);
