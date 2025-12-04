import { run } from "./problem5.js";
const program = [
 3,23,3,24,1002,24,10,24,1002,23,-1,23,
101,5,23,23,1,24,23,23,4,23,99,0,0
];
const permutation = (value) =>{
  const permute = []
  for (const i of value){
    const p = permutation(value.filter(x => x != i))
    
    p.length === 0 ? permute.push(i,0) : permute.push(i,p.flatMap(x => x))
    
  }
  return permute
}

console.log(permutation([1,2,3]));
const c = permutation([1,2,3])

const makeComb = (num,arr) => {
  console.log(num,arr);
  
  let x = []
  for (const i of arr){
    
    if ( i === 0 ){
      console.log(num,x);
      x = [num]
      continue

    }
    x.push[i]
    console.log(x);
    

  }
}

for (let i = 0 ; i < c.length ; i += 2){
  makeComb(c[i],c[i+1])
}


