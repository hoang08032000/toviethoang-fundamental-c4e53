let flock = [5,7,300,90,24,50,75]
console.log(`Hello, my name is Hoang and these is my ship size: \n [${flock}]`)
let max = flock[0]
for(let i=0;i<flock.length;i++){
    if(max < flock[i]){
        max = flock[i]
    }
}
console.log(`Now my biggest sheep has size ${max} let's shear it`)
flock[flock.indexOf(max)] = 8
console.log(`After shearing, here is my flock: \n [${flock}]`)

for(let i=0;i<flock.length;i++){
    flock[i] = flock[i] + 50
}
console.log(`One month passed, now here is my flock \n [${flock}]`)

