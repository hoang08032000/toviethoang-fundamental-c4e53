const content = document.getElementById("content")
const userInput = document.getElementById("user_input")
const button = document.getElementById("submit")
const database = {}
const api = async () => {
    const getApi = await fetch("https://sheetdb.io/api/v1/z4j2qx2u0v1ig")
    const data = await getApi.json()
    database.data = data
    console.log(database.data)
}

const output = () => {
    console.log(database.data[1].name)
    for(let i=0;i<database.data.length;i++){
        let innerHTML = `
        <p>Name: ${database.data[i].name}</p>
        `
        content.innerHTML += innerHTML
    }
}

const append = () => {
    button.addEventListener("click", () => {
        content.innerHTML += `<p>Name: ${userInput.value}</p>`
        userInput.value = ""
        console.dir(userInput)
    })
}


// Em mới in ra đuọc thôi ạ! Nộp tạm anh ạ mệt quá :)))))))) //


const main = async () => {
    await api()
    await output()
    append()
}
main()