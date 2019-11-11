const links = document.getElementById("a")
const button = document.getElementById("button")
const userInput = document.getElementById("user-input")
const select = document.getElementById("select")
const buttonColors = document.getElementById("button-color")

console.dir(links)
console.dir(select)
button.addEventListener("click", () =>{
    userInput.value = links.href
})
select.addEventListener("change", ()=>{
    console.log(select.selectedIndex)
})
buttonColors.addEventListener("click", () =>{
    select.remove(select.selectedIndex)
})