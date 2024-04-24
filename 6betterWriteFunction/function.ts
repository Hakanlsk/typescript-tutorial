//hataya yol acabilecek kullanim (ts hata vermiyor)
function addTwo(num: number) {
  return "hello";
}

//dogru kullanim (simdi ts hata veriyor)
// function addThree(num:number):number{
//     return "hello world"
// }

//iki type birden return edilen durum (boolean and string)
//dogru kullanimin bu oldugundan emin degilim
function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}
console.log(getValue(4));

//arrow function ile kullanımı

const getHello = (s: string): string => {
  return "";
};

//bu durumda ts otomatik olarak hero:string olur, hepsi sayı olsaydı hero:number olacaktı
const heros = ["thor", "spiderman", "ironman"];

heros.map((hero) => {
  return `return hero is ${hero}`; //buraya return 1 yazdigimizda hata vermez
});

//donen degeri belirtmek isteyebiliriz
//bu daha dogru bir kullanimdir
const heros2 = ["atesadam", "dortkol", "grimadde"];

heros2.map((hero): string => {
  return `hero is ${hero}`; //buraya return 1 yazdigimizda hata verir
});

//** never and void
//sakincali kullanim
function consoleError (errmsg:string):void{
    console.log(errmsg)
}
//dogru kullanim
function handleError (errmsg:string):never{
    throw new Error(errmsg)
}

export {};
