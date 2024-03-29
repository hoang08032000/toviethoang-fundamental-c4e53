function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
let quizzes = [
    {
        Question: "1+1",
        Answers : [2,3,4,5],
        rightAnswer: 2,
    },
    {
        Question: "Ai béo nhất",
        Answers : ["AN","Hoàng","Dẹo","Duy"],
        rightAnswer: "Dẹo",
    },
]
let loop = true
let numberOfQuestions = quizzes.length
let point = 0
while(loop){
    let random = quizzes[Math.floor(Math.random()*quizzes.length)]
    let answers = `Câu hỏi: ${random.Question}`
    shuffle(random.Answers)
    random.Answers.forEach((v,i)=>{
        answers+= `\n ${i+1}. ${v}`
    })
    let a = Number(prompt(answers))
    if(random.Answers[a-1] == random.rightAnswer){
        alert("Chúc mừng")
        point+=1
    }else{
        alert("Sai rồi. Chúc may mắn")
    }
    quizzes.splice(quizzes.indexOf(random),1)
    if(quizzes.length == 0){
        alert(`Chúc mừng bạn đã trả lời đúng ${point}/${numberOfQuestions} câu hỏi`)
        loop = false
    }
}
