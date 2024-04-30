//jsteki klasik obje yapimiz
const user = {
    name: "hakan",
    email : "hakan@gmail.com",
    isActive: true
}
//createUser
function createUser ({name:string, isPaid: boolean}){

}
createUser({name:"hakan", isPaid: false})


function createCourse():{name:string, price:number} {
    return {name:"reactNative", price:399}
}

//bu sefer createUser fonksiyonuna email de eklemek istiyoruz
//ama bunu zorunlu degil istege bagli ayarlamak istersek
//boyle bir cozum izleyebiliriz(!dikkat: dogru cozum yolu bu degil ileride anlatilacak)
function createUser2 ({name:string, isPaid: boolean}){}
let newUser = {name:"hakan", isPaid: false, email:"hakan@gmail.com"}
createUser2({name:"hakan", isPaid: false})










export{}


