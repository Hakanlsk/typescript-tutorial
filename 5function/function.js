"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//**bu şekilde uygulandığında function sonucu any olarak kabul edilir, YANLIŞ KULLANIM
function addTwo(num) {
    return num + 2;
}
console.log(addTwo("5"));
//**DOĞRU KULLANIM
function addThree(num) {
    return num + 3;
}
var sayi = addThree(3);
console.log(sayi);


function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("hakan"));


function signUpUser(name, email, isPaid) { }
signUpUser("hakan", "@gmail", true);


function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
}
loginUser("hakan", "@gmail");


//yanlış kullanım, num parametresine number verdigimiz icin string return edildigi halde hata vermiyor
//bunun dogru kullanimi bir sonraki dosyada
function addFour(num) {
    return "hello";
}
var sayi2 = addFour(3);
console.log(sayi2); //hello
