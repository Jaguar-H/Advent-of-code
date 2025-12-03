const moduleWeights = Deno.readTextFileSync("input.txt");

const fuelFor = (w) => {
  const f = Math.floor(w / 3) - 2;
  if (f < 1) return 0;
  return f + fuelFor(f);
};

const totalFuel = moduleWeights
  .split("\n")
  .reduce((acc, w) => acc + fuelFor(w), 0);

console.log(totalFuel);
