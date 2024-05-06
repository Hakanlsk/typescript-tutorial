//const score: number[] = [];
const score: Array<number> = [];
const names: Array<string> = [];

const persons: string[] = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}
/*
Burada "identityThree" fonksiyonu, bir tür parametresi alır ve dönüş türünü de bu tür parametresi ile belirler.
Bu, fonksiyonun bir parametre aldığını ve ne türde bir değer alırsa alsın, aynı türde bir değeri geri döndüreceğini belirtir.
Yani, "Type" aslında fonksiyonun içerisine geçirilen bir türdür.
Dolayısıyla, eğer bir sayı geçirirseniz, Type "number" olur; 
eğer bir dize geçirirseniz, Type "string" olur. 
Bu sayede, aynı fonksiyon farklı türlerle kullanılabilir, ancak her zaman tür güvenliği sağlanır.
*/
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3)
identityThree("3")