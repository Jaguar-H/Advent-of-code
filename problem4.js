const isValidPass = (num) => {
  const s = num + "";
  for (let i = 1; i < 6; i++) {
    if (s[i] < s[i - 1]) return false; // must not decrease
  }
  const counts = {};
  for (const i of s) counts[i] = (counts[i] || 0) + 1;
  
  return Object.values(counts).includes(2)
};

let validCount = 0;

for (let i = 193651; i <= 649729; i++) {
  if (isValidPass(i)) validCount++;
}

console.log(validCount);

