function is_inside(a=[],b=[]){
    if(a[0]<b[0] || a[1]<b[1]){
        return false
    } else{
        return true
    }
}
let a = [100, 120]
let b = [140, 60]
let result
if(is_inside(a,b)==true){
    result = "inside"
}else{
    result = "outside"
}
if(result === "outside" || result === "inside"){
    console.log("your function is correct")
} else{
    console.log("Ooops, bugs detected")
}