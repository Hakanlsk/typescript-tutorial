//bu konudaki kodlar bir onceki "objects" ile iliskilidir
//createUser vs fonksiyonlari uzerinden anlatilacak

//bu kullanım sekli ile projede artık type ı string olarak belirmeke istedigim yerlerde
//myString ifadesini kullanabilmemi saglar

type myString = string

//birden fazla type belirlemede kullanilir
type User = {
    name: string;
    email: string;
    isActive: boolean
}
function createUser(user:User){}
createUser({name:"", email:"", isActive:true})

//fonksiyonun dondurmesi gereken degeri de bu typelara baglayabiliriz
type User2 = {
    name: string;
    email: string;
    isActive: boolean
}
function createUser2(user:User):User{
    return {name:"", email:"", isActive:true}
}
createUser2({name:"", email:"", isActive:true})



export {}