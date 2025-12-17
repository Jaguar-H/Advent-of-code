import { data7 } from "./input1.js";

const data = data7.split("\n").map((x) => x.split(""));

const counter = Array.from({length : data.length},() => Array(data[0].length).fill(0))

counter[0][data[0].indexOf("S")] += 1;


const obstacleBelow = ([y,x]) => data[y+1][x] === "^"

for(let y = 0 ; y < data.length - 1;y++){
  for (let x = 0; x < data[y].length;x++){
    if (counter[y][x] === 0)continue;
    
    if (obstacleBelow([y,x])){
      
      counter[y + 1][x-1] += counter[y][x]
      counter[y + 1][x+1] += counter[y][x]
      continue
    }
    counter[y+1][x] += counter[y][x]
  }
}

console.log(counter.reverse()[0].reduce((sum,x) => sum + x,0));
