let learn = [
    {
        name: "HTML",
        Conmplete: false,
    },
    {
        name: "CSS",
        Conmplete: false,
    },
    {
        name: "Bassic of Javascript",
        Conmplete: false,
    },
    {
        name: "Node Package Manager (npm)",
        Conmplete: false,
    },
    {
        name: "Git",
        Conmplete: false,
    },
]
console.log(`Hi there, this is your learning tasks to front-end developer carrer:`)
learn.forEach((v,i) => {
    console.log(`${i+1}.  ${learn[i].name} \n \tComplete: ${learn[i].Conmplete}`)
})
console.log(`-----------------------------------------------------------------`)
let newCommand = prompt("Enter your command (New, Delete, Update, Complete)").toLowerCase()
if(newCommand == "new"){
    let newTask = prompt("Enter new task")
    learn.push({
        name: newTask,
        Conmplete: false,
    })
    learn.forEach((v,i) => {
        console.log(`${i+1}.  ${learn[i].name} \n \tComplete: ${learn[i].Conmplete}`)
    })
} else if(newCommand == "update"){
    let updateIndex = Number(prompt("Enter position"))
    if(updateIndex<0 || updateIndex>learn.length){
        alert("Error")
    }else{
        let newTitle = prompt("Enter new title")
        learn[updateIndex-1].name = newTitle
        learn.forEach((v,i) => {
            console.log(`${i+1}.  ${learn[i].name} \n \tComplete: ${learn[i].Conmplete}`)
        })
    }
} else if(newCommand == "complete"){
    let completePosition = Number(prompt("Enter position"))
    learn[completePosition-1].Conmplete = true
    learn.forEach((v,i) => {
        console.log(`${i+1}.  ${learn[i].name} \n \tComplete: ${learn[i].Conmplete}`)
    })
} else if(newCommand == "delete"){
    let deleteIndex = Number(prompt("Enter positions"))
    learn.splice(deleteIndex-1,1)
    learn.forEach((v,i) => {
        console.log(`${i+1}.  ${learn[i].name} \n \tComplete: ${learn[i].Conmplete}`)
    })
} else {
    alert("Error")
}

for(let i=0;i<learn.length;i++){
    if(learn[i].Conmplete == true){
        console.log(`${i+1}. [x] ${learn[i].name}`)
    }else{
        console.log(`${i+1}. [ ] ${learn[i].name}`)
    }
}
