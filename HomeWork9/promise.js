// const promise =  new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("p")
//     },5000)
// })
// promise.then(mess=>{
//     console.log(mess)
// })
 
const promise = async () =>{
    await setTimeout(()=>{
        console.log("p")
    },5000)
}
promise()