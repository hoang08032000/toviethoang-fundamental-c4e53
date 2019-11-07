function is_inside(a=[],b=[]){
    if(a[0]<b[0] || a[1]<b[1]){
        return false
    } else if(a[0] > b[0]+b[2] || a[1] > b[1]+b[3]){
        return false
    }else if(a[0]>b[0]){
        return true
    }
}
let a = [300, 500]
let b = [140, 60,100,400]
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
console.log(result)
