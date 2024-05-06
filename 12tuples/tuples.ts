/*
aşağıdaki kullanımı zaten öğrenmiştik, bu kullanımda dizi içindeki
farklı typetaki değerlerin sırasıın bir önemi yoktu
*/

const user: (string | number)[] = ["hakan", 1];
const user2: (string | number)[] = [1, "hakan"];

//## ama tuple sayesinde bu sırayı da belirleyebiliriz bu örnekte dizinin uzunluğu da belirlidir (3)

let tuser: [string, number, boolean];
tuser = ["hakan", 25, true];

//sıraya uymazsak ts hata verir
tuser = [60, "hakan", false];

//ama yukarıdaki örnekler kullanışlı değildir
//type ile beraber kullanmak daha doğrudur

type User = [string, string, number];

let hakan: User = ["hakan", "hakan.com", 72];

hakan[0] = "mahmut";

//## dizi uzunluğu 3 ya da daha fazlaysa tuple type güvenliği çalışmaz
let ourTuple: [number, boolean, string];
ourTuple = [5, false, "Coding God was here"];
ourTuple.push("Something new and wrong");
console.log(ourTuple); //5, false, 'Coding God was here', 'Something new and wrong'

//## uzunluk 2 olduğu için tuple da type güvenliği push gibi durumlarda da çalışır
let ourTuple2: [number, boolean];
ourTuple2 = [5, false];
ourTuple2.push("Something new and wrong"); //altı kırmızı olur
console.log(ourTuple2); //console çıktısı hata verir

export {};
