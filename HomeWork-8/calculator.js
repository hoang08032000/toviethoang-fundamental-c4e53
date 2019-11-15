const result = document.getElementById("result")
function one_click(value){
    result.innerText += value
}
function equalButton(){
    result.innerText = eval(result.innerText)
    return result.innerText
}
function delButton(){
    result.innerText = result.innerText.substring(0,result.innerText.length-1)
}
function acButton(){
    result.innerText = ""
}



















