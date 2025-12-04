const data = Deno.readTextFileSync("orbits.txt");
// const data = `
// COM)B
// B)C
// C)D
// D)E
// E)F
// B)G
// G)H
// D)I
// E)J
// J)K
// K)L
// H)YOU
// I)SANTA
// `.trim();

const orbits = {};

data.split("\n").forEach((ele) => {
  const [ob, db] = ele.split(")");
  orbits[db] = ob;
});

const countOrbits = (planet) => {
  let count = [];
  while (orbits[planet]) {
    count.push(planet);
    planet = orbits[planet];
  }
  return count;
};
const sanPlanet = orbits["SAN"];
const youPlanet = orbits["YOU"];

const santa = countOrbits(sanPlanet);
const you = countOrbits(youPlanet);
let intersectCount = 0;
const getShortestPath = () => {
  for (let i = 0; i < santa.length; i++) {
    for (let j = 0; j < you.length; j++) {
    
      if (santa[i] === you[j]){
        console.log(i,j);
        console.log(santa[i] , you[j]);
        
        return i + j
      } 
    }
  }
  return intersectCount
};
// console.log(santa);

console.log(getShortestPath());

// console.log(Object.keys(orbits).reduce((sum,planet) => sum + countOrbits(planet),0))
// console.log(orbits);
