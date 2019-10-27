let flock = [5,7,300,90,24,50,75]
console.log(`Hello, my name is Hoang and these is my ship size: \n [${flock}]`)
for(let i=0;i<3;i++){
    console.log(`Now my biggest sheep is size ${Math.max(...flock)} let's shear it`)   
    flock[flock.indexOf(Math.max(...flock))] = 8
    console.log(`After shearing, here is my flock \n  ${flock}`)
    for(let j=0;j<flock.length;j++){
        flock[j] = flock[j] + 50
    }
    console.log(`MONTH ${i+1} \n One month passed, now here is my flock \n ${flock} `) 
    
}
let money = flock.reduce((accumalator,currentValue) => accumalator+currentValue)
console.log(`My flock has size in total: ${money} \n I would get ${money} * 2$ = ${money*2}$`)
