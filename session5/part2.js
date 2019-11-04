let Words = ["to","be","that","of","elon","to","this","now","back",
"cool","hey","love","of","life","that","rain","summer",
"color","now","of","hat","late","sorry","my","team"]
let newWords=[...new Set(Words)]
let newWords_Object = {}
// console.log(b)
for(let i=0;i<newWords.length;i++){
    let count =0
    for(let j=0;j<Words.length;j++){
        if(newWords[i] == Words[j]){
            count+=1
        }
    }
    newWords_Object[newWords[i]] = count
}
console.log(newWords_Object)   
