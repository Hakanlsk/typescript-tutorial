const superHeros:string[] = []
const heroPower:number[] = []

superHeros.push("spiderman")
heroPower.push(80)

//aynı islemi farklı bir syntax ile de yapabiliriz
const heroPower2: Array<number> = []

/*
## aşağıdaki şekilde de kullanılım oldukça yaygındır


## Bu TypeScript kodu, User türünde nesnelerden oluşan bir boş dizi oluşturur; 
bu dizideki her öğe, name adında bir string ve isActive adında bir boolean özelliği içerir.
allUsers dizisi, içindeki öğelerin User türüne uygun olmasını gerektirir.
*/

type User = {
    name:string
    isActive:boolean
}

const allUsers: User[] = []

allUsers.push({name:"", isActive: false})

//

const MLModels: number[][] = [
    [255,255,255]
]





export{}