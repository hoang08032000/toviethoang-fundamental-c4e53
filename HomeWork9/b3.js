// const aaa = (a,b)=>{
//     let c = Math.floor(Math.random()*(b-a)+a)
//     console.log(c)
//     return c
// }
// const x = aaa(4,16)
// if (x < 4) {
//   console.log('Failed: the number is smaller than 4');
// } else if (x > 16) {
//   console.log('Failed: the number is bigger than 16');
// } else {
//   console.log('Passed, bravo');
// }


const distance = (x1,x2,y1,y2) => {
    return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))
}
const x = distance(3,10,0,6)
if (x !== Math.sqrt(85)) {
    console.log('Failed: the calculation is wrong');
  } else {
    console.log('Passed, bravo');
  }
