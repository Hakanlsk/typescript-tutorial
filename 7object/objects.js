"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//jsteki klasik obje yapimiz
var user = {
    name: "hakan",
    email: "hakan@gmail.com",
    isActive: true
};
//createUser
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "hakan", isPaid: false });
function createCourse() {
    return { name: "reactNative", price: 399 };
}
//bu sefer createUser fonksiyonuna email de eklemek istiyoruz
//ama bunu zorunlu degil istege bagli ayarlamak istersek
//boyle bir cozum izleyebiliriz(!dikkat: dogru cozum yolu bu degil ileride anlatilacak)
function createUser2(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "hakan", isPaid: false, email: "hakan@gmail.com" };
createUser2({ name: "hakan", isPaid: false });
