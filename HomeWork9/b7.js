const body = document.getElementById("quote")
const data = {}
const quote = async () => {
    const respone = await fetch("http://quotes.rest/qod.json")
    const getQuote = await respone.json()
    console.log(getQuote)
    data.contents = getQuote.contents.quotes
    console.log(data.contents)
}

const output = () => {
    let innerHTML = `
    <h1>${data.contents[0].quote}</h1>
    <cite>-${data.contents[0].author}-</cite>
    `
    body.innerHTML +=innerHTML
}

const main = async ()=>{
    await quote()
    output()
}
main()