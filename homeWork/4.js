const table = document.getElementById("table")
const row = document.getElementById("row")
const cell = document.getElementById("cell")
const content = document.getElementById("content")
const button = document.getElementById("button")

button.addEventListener("click",()=>{
    if( row.valueAsNumber <= table.rows.length && row.valueAsNumber >0 ){
        if( cell.valueAsNumber <= table.rows[row.valueAsNumber-1].cells.length && cell.valueAsNumber >0){
            table.rows[row.valueAsNumber-1].cells[cell.valueAsNumber-1].innerText = content.value
        }
    }else{
        alert("Bạn nhập sai rồi!!!")
    }
    // console.dir(table.rows.cells)
})
