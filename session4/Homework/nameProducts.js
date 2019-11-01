let product =[{
    name: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 428,
    color: "White",
    category: "Charger"
    },
    {
    name: "VSmart Active 1",
    brand: "Vsmart",
    price: 5487,
    color: "Black",
    category: "Phone"
    },
    {
    name: "Iphone X",
    brand: "Iphone",
    price: 21490,
    color: "Gray",
    category: "Phone"
    },
    {
    name: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color: "Blue",
    category: "Phone"
    }]
///////////// Bai 8: ///////////////
for(let i=0;i<product.length;i++){
        console.log(`-------------------------------------------------`)
        console.log(`name: ${product[i].name} \n price: ${product[i].price}`)
    } 


///////////// Bai 9: ///////////////
// let userEnter = prompt("Enter your Category")
// for(let i=0;i<product.length;i++){
//     if(userEnter == product[i].providers){
//         console.log(`-------------------------------------------------`)
//         console.log(`name: ${product[i].name} \n price: ${product[i].price}`)
//     }
// }

//////////// Bai 10: /////////////////
// for(let i=0; i<product.length;i++){
//     console.log(`#${i+1}. ${product[i].name} \n \t ${product[i].price}`)
// }
// let userIndex = Number(prompt("Enter your position"))
// if(userIndex<0 || userIndex >product.length){
//     alert(`Error`)
// }else{
    // for(let j=0;j<Object.keys(product[userIndex-1]).length;j++){
    //     let keys = Object.keys(product[userIndex-1])[j]
    //     console.log(`${keys}: ${product[userIndex-1][keys]} `)
    // }
// }
for(let i=0;i<product.length;i++){
    let addProviders = prompt(`Providers (${product[i].name})`)
    product[i]["providers"] = addProviders
    console.log(`#${i+1}. ${product[i].name} \n Price: ${product[i].price} \n Providers: ${product[i].providers}`)
}
let userEnter = prompt("Enter Providers")
for(let i=0;i<product.length;i++){
    if(userEnter == product[i].providers){
        console.log(`-------------------------------------------------`)
        for(let j=0;j<Object.keys(product[i]).length;j++){
            let keys = Object.keys(product[i])[j]
            console.log(`${keys}: ${product[i][keys]} `)
        }
    }
}

