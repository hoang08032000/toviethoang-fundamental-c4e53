function get_even_list(l =[Number]){
    let evenList = []
    for(let i=0;i<l.length;i++){
        if(l[i]%2==0){
            evenList.push(l[i])
        }
    }
    return evenList
}
even_lists = get_even_list([1, 2, 5, 9, -10, 6])

if (JSON.stringify(even_lists) == JSON.stringify([2, -10, 6])){
    console.log("Your function is correct")
}else{
    console.log("Ooops, bugs detected")}
