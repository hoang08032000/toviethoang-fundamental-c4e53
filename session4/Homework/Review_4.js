let dictionary = {
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done: "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
    defect: "The formal word for ‘error’",
    pm: "The short version of Project Manager, the person in charge of the final result of a project",
    ui_ux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
}
alert("Hi there, it is dev dictionary")
let loop = true
while(loop){
    let userChoice = prompt("Enter a keyword").toLowerCase()
    if(userChoice in dictionary){
        alert(`${dictionary[userChoice]}`)
    } else{
        let userUpdate = prompt(`We can't find your word: ${userChoice}, leave your explanation:`)
        dictionary[userChoice] = userUpdate
        alert(`Done`)
    }
}
