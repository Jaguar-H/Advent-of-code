const data = `
COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L
`.trim();
// const data = Deno.readTextFileSync("orbits.txt");

const orbits = {};

data.split("\n").forEach((ele) => {
  const [io, oo] = ele.split(")");
  orbits[oo] = io;
});
console.log(orbits);

const countOrbits = (planet) => {
  let count = 0;
  while (orbits[planet]) {
    count++;
    planet = orbits[planet];
  }
  return count;
};

console.log(["B7P"].reduce((sum,planet) => sum + countOrbits(planet),0))

