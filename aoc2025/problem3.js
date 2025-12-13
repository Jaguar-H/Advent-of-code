import { data3 } from "./input1.js";
const input = data3.split("\n");
// const input = `987654321111111
// 811111111111119
// 234234234234278
// 818181911112111`.split("\n");
// console.log(input);

let powerOutput = 0;

//434444444478
//234234234234278
const findHighestCombo = (number, required) => {
  let highest = "";
  let i = 0
  while(highest.length !== required) {
    let highestDigit = number[i];
    for (let j = i + 1; j < number.length - (required - highest.length - 1); j++) {
      const candidate = number[j];
      highestDigit = highestDigit > candidate ? highestDigit : candidate;
    }

    i = number.indexOf(highestDigit,i);
    console.log(highestDigit);
    
    highest += highestDigit;
    i++
  }
  console.log(highest);

  powerOutput += +highest;
};

for (const i of input) {
  findHighestCombo(i,12);
}

console.log(powerOutput);
