"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//hataya yol acabilecek kullanim (ts hata vermiyor)
function addTwo(num) {
    return "hello";
}
//yanlis kullanim (simdi ts hata veriyor)
// function addThree(num:number):number{
//     return "hello world"
// }
//iki type birden return edilen durum (boolean and string)
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
console.log(getValue(4));
