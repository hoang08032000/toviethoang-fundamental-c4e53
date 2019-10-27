let shop = ["T-Shirt", "Sweater"]
let loop = true
while(loop){
    let key = prompt("C/R/U/D?").toLowerCase()
    if(key == "r"){
        console.log(shop)
    } else if(key == "c"){
        let created = prompt("Mặt hàng bạn muốn thêm")
        shop.push(created)
        console.log(shop)
    } else if(key == "u"){
        let Updated = prompt("Bạn muốn thêm theo Value hay index? v/i?").toLowerCase()
        if(Updated == "i"){
            let indexUpdated = Number(prompt("Vị trí bạn muốn thay đổi"))
            if(indexUpdated < 0 || indexUpdated > shop.length){
                alert("Nhập sai rồi bạn êi")
            } else{
                shop[indexUpdated-1] = prompt("Bạn muốn đổi thành gì nào?")
                console.log(shop)
            }
        } else if(Updated == "v"){
            let valueUpdate = prompt("Nhập mặt hàng bạn muốn thay đổi")
            if(shop.includes(valueUpdate)){
                let indexUpdated = shop.indexOf(valueUpdate)
                shop[indexUpdated] = prompt("Bạn muốn đổi thành gì nào?")
                console.log(shop)
            }
        } else{
            alert("Lỗi rồi bạn êi")
        }
    } else if(key == "d"){
        let Deleted = prompt("Bạn muốn xóa theo value hay index? v/i?")
        if (Deleted == "i"){
            let indexDeleted = Number(prompt("Vị trí bạn muốn thay đổi"))
            if(indexDeleted < 0 || indexDeleted > shop.length){
                alert("Nhập sai rồi bạn êi")
            } else{
                shop[indexDeleted-1] = prompt("Bạn muốn đổi thành gì nào?")
                console.log(shop)
            }
        } else if(Deleted == "v"){
            let valueDeleted = prompt("Nhập mặt hàng bạn muốn thay đổi")
            if(shop.includes(valueDeleted)){
                let indexDeleted = shop.indexOf(valueDeleted)
                shop[indexDeleted] = prompt("Bạn muốn đổi thành gì nào?")
                console.log(shop)
            }
        } else{
            alert("Lỗi rồi bạn êi")
        }
    }
}
