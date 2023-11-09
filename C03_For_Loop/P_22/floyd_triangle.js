// Write a program in C to print Floyd's Triangle.

// 1 
// 01
// 101 
// 0101 
// 10101


const floydTriangle = height => {

for(let i = 1; i <= height; i++){
  let space = ' '
  for (let j = 1; j >= 0; j--){
    space += j + ' ';
    console.log(space)
  }

}




}

floydTriangle(4)