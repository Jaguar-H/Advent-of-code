function hcf(term1, term2) {
  const limit = term1 < term2 ? term2 : term1;
  let result = 1;
  if (term1 == 0 && term2 == 0) {
    return;
  }
  result = gettingHcf(term1, term2, limit);
  return result;
}

function gettingHcf(a, b, limit) {
  let result = 1;
  for (let factor = 1; factor <= limit; factor++) {
    if (a % factor === 0 && b % factor === 0) {
      result = factor > result ? factor : result;
    }
  }
  return result;
}

const space = `#....#.....#...#.#.....#.#..#....#
#..#..##...#......#.....#..###.#.#
#......#.#.#.....##....#.#.....#..
..#.#...#.......#.##..#...........
.##..#...##......##.#.#...........
.....#.#..##...#..##.....#...#.##.
....#.##.##.#....###.#........####
..#....#..####........##.........#
..#...#......#.#..#..#.#.##......#
.............#.#....##.......#...#
.#.#..##.#.#.#.#.......#.....#....
.....##.###..#.....#.#..###.....##
.....#...#.#.#......#.#....##.....
##.#.....#...#....#...#..#....#.#.
..#.............###.#.##....#.#...
..##.#.........#.##.####.........#
##.#...###....#..#...###..##..#..#
.........#.#.....#........#.......
#.......#..#.#.#..##.....#.#.....#
..#....#....#.#.##......#..#.###..
......##.##.##...#...##.#...###...
.#.....#...#........#....#.###....
.#.#.#..#............#..........#.
..##.....#....#....##..#.#.......#
..##.....#.#......................
.#..#...#....#.#.....#.........#..
........#.............#.#.........
#...#.#......#.##....#...#.#.#...#
.#.....#.#.....#.....#.#.##......#
..##....#.....#.....#....#.##..#..
#..###.#.#....#......#...#........
..#......#..#....##...#.#.#...#..#
.#.##.#.#.....#..#..#........##...
....#...##.##.##......#..#..##....`.split("\n").map((x) => x.split(""));
const asteroids = [];

console.log(space);
for (let i = 0; i < space.length; i++) {
  for (let j = 0; j < space[i].length; j++) {
    if (space[i][j] === "#") asteroids.push([i, j]);
  }
}
console.log(asteroids);

const includes = ([x, y], array) => {
  for (const i of array) {
    // console.log(i);

    const [x2, y2] = i;
    if ((x2 === x) && (y2 === y)) {
      return true;
    }
  }
  return false;
};

let goodSpot = { canSee: -Infinity };
let canSee = [];

for (const [y, x] of asteroids) {
  for (const [y1, x1] of asteroids) {
    if ((x === x1 && y === y1)) continue;
    let a = x1 - x;
    let b = y1 - y;
    const gcd = hcf(Math.abs(a), Math.abs(b));
    a = a / gcd;
    b = b / gcd;
    // console.log([y, x], [y1, x1], [b, a]);
    if (!includes([a, b], canSee)) {
      canSee.push([a, b]);

      // console.log(asteroids[i],asteroids[j]);
    }
  }
  if (goodSpot.canSee < canSee.length) {
    // console.log(canSee.length, asteroids[i]);
    goodSpot = { x: x, y: y, canSee: canSee.length };
  }
  canSee = [];
}
const sx = goodSpot.x;
const sy = goodSpot.y;

const angles = [];

for (const ast of asteroids) {
  const [y,x] = ast

  if (x === sx && y === sy) continue;

  const dx = x - sx;
  const dy = y - sy;

  let ang = Math.atan2(dx, -dy); 
  if (ang < 0) ang += Math.PI * 2;
  const distance = dx*dx + dy*dy

  angles.push([ang,distance,x,y]);
}

// console.log(angles.sort((a,b ) => a[0] - b[0]).forEach(e => console.log(e)
// ));

const ang = {}

const groups = angles.reduce((acc, [ang, dist, x, y]) => {
  let idx = -1;
  for (let i = 0; i < acc.length; i++) {
    if (acc[i][0] === ang) {
      idx = i;
      break;
    }
  }

  if (idx === -1) {
    acc.push([ang, [[dist, x, y]]]);
  } else {
    acc[idx][1].push([dist, x, y]);
  }

  return acc;
}, []);
groups.sort((a, b) => a[0] - b[0]);

for (const g of groups) {
  g[1].sort((a, b) => a[0] - b[0]);
}


let count = 0;
console.log(goodSpot);

while (count != 200) {
  for (const g of groups) {
    if (g[1].length > 0) {
      const [dist, x, y] = g[1].shift();
      count++;

      if (count === 200) {
        console.log(x, y);
        break;
      }
    }
  }
}




