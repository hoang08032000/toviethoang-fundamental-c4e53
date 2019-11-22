const url = "https://reqres.in/api/users?page=2&fbclid=IwAR2Kz5YlrSFaBBRadXdBc4TNMTP28I-CbZznO2UQxyfgiJbMGACKIY1IAWw"

const fetchPromise = new Promise((resolve,reject) => {
    resolve(fetch(url))
})

fetchPromise.then(conection =>{
    console.log("conection")
    return conection.json()
})
.then(response =>{
    console.log(response.data)
})