const moons = [
  [[-1, 0, 2], [0, 0, 0]],
  [[2, -10, -7], [0, 0, 0]],
  [[4, -8, 8], [0, 0, 0]],
  [[3, 5, -1], [0, 0, 0]],
];
const absMoons = [
  [[-1, 0, 2], [0, 0, 0]],
  [[2, -10, -7], [0, 0, 0]],
  [[4, -8, 8], [0, 0, 0]],
  [[3, 5, -1], [0, 0, 0]],
];

const compare = (a, b) => {
  if (a === b) {
    return [0, 0];
  }
  return a > b ? [-1, 1] : [1, -1];
};

const add = ([x, y, z], [vx, vy, vz]) => [x + vx, y + vy, z + vz];

let numberOfSteps = 0

for (let w = 0; w < 6; w++) {

  for (let i = 0; i < moons.length; i++) {
    for (let j = i + 1; j < moons.length; j++) {
      let [a, b] = compare(moons[i][0][0], moons[j][0][0]);
      moons[i][1][0] += a;
      moons[j][1][0] += b;

      [a, b] = compare(moons[i][0][1], moons[j][0][1]);
      moons[i][1][1] += a;
      moons[j][1][1] += b;

      [a, b] = compare(moons[i][0][2], moons[j][0][2]);
      moons[i][1][2] += a;
      moons[j][1][2] += b;
    }
  }
  numberOfSteps++;
  for (let k = 0; k < moons.length; k++) {
    moons[k][0] = add(moons[k][0], moons[k][1]);
  }
}

console.log(moons);

