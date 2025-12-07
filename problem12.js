const moons1 = [
  [[13, -13, -2], [0, 0, 0]],
  [[16, 2, -15], [0, 0, 0]],
  [[7, -18, -12], [0, 0, 0]],
  [[-3, -8, -8], [0, 0, 0]],
];
const moons2 = [
  [[13, -13, -2], [0, 0, 0]],
  [[16, 2, -15], [0, 0, 0]],
  [[7, -18, -12], [0, 0, 0]],
  [[-3, -8, -8], [0, 0, 0]],
];
const moons3 = [
  [[13, -13, -2], [0, 0, 0]],
  [[16, 2, -15], [0, 0, 0]],
  [[7, -18, -12], [0, 0, 0]],
  [[-3, -8, -8], [0, 0, 0]],
];

const absMoons = [
  [[13, -13, -2], [0, 0, 0]],
  [[16, 2, -15], [0, 0, 0]],
  [[7, -18, -12], [0, 0, 0]],
  [[-3, -8, -8], [0, 0, 0]],
];
// const moons1 = [
//   [[-8, -10, 0], [0, 0, 0]],
//   [[5, 5, 10], [0, 0, 0]],
//   [[2, -7, 3], [0, 0, 0]],
//   [[9, -8, -3], [0, 0, 0]],
// ];
// const moons2 = [
//   [[-8, -10, 0], [0, 0, 0]],
//   [[5, 5, 10], [0, 0, 0]],
//   [[2, -7, 3], [0, 0, 0]],
//   [[9, -8, -3], [0, 0, 0]],
// ];
// const moons3 = [
//   [[-8, -10, 0], [0, 0, 0]],
//   [[5, 5, 10], [0, 0, 0]],
//   [[2, -7, 3], [0, 0, 0]],
//   [[9, -8, -3], [0, 0, 0]],
// ];

// const absMoons = [
//   [[-8, -10, 0], [0, 0, 0]],
//   [[5, 5, 10], [0, 0, 0]],
//   [[2, -7, 3], [0, 0, 0]],
//   [[9, -8, -3], [0, 0, 0]],
// ];
// const moons1 = [
//   [[-1, 0, 2], [0, 0, 0]],
//   [[2, -10, -7], [0, 0, 0]],
//   [[4, -8, 8], [0, 0, 0]],
//   [[3, 5, -1], [0, 0, 0]],
// ];
// const moons2 = [
//   [[-1, 0, 2], [0, 0, 0]],
//   [[2, -10, -7], [0, 0, 0]],
//   [[4, -8, 8], [0, 0, 0]],
//   [[3, 5, -1], [0, 0, 0]],
// ];
// const moons3 = [
//   [[-1, 0, 2], [0, 0, 0]],
//   [[2, -10, -7], [0, 0, 0]],
//   [[4, -8, 8], [0, 0, 0]],
//   [[3, 5, -1], [0, 0, 0]],
// ];
// const absMoons = [
//   [[-1, 0, 2], [0, 0, 0]],
//   [[2, -10, -7], [0, 0, 0]],
//   [[4, -8, 8], [0, 0, 0]],
//   [[3, 5, -1], [0, 0, 0]],
// ];

const compare = (a, b) => {
  if (a === b) {
    return [0, 0];
  }
  return a > b ? [-1, 1] : [1, -1];
};

const add = ([x, y, z], [vx, vy, vz]) => [x + vx, y + vy, z + vz];

const doSomething = (moons,axis) => {
  let numberOfSteps = 0;

  while (true) {
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

    let same = true;

    for(let l = 0 ; l < moons.length;l++ ) {
      if(moons[l][0][axis] !== absMoons[l][0][axis] ||
        moons[l][1][axis] !== absMoons[l][1][axis]
      ){
        same = false;
        break;
      }
    }

      if (same) {
        console.log("done ", numberOfSteps);

        return numberOfSteps;
      }
    }
  }
// console.log(doSomething());

// let totalEnergy = 0;

// for (const i of moons) {
//   const PE = i[0].reduce((sum, value) => sum + Math.abs(value), 0);
//   const KE = i[1].reduce((sum, value) => sum + Math.abs(value), 0);
//   totalEnergy += PE * KE;
// }

// console.log(totalEnergy);

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const px = doSomething(moons1,0);
const py = doSomething(moons2,1);
const pz = doSomething(moons3,2);

console.log(lcm(lcm(px,py),pz));
