"use strict";
//bu konudaki kodlar bir onceki "objects" ile iliskilidir
//createUser vs fonksiyonlari uzerinden anlatilacak
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) { }
createUser({ name: "", email: "", isActive: true });
function createUser2(user) {
    return { name: "", email: "", isActive: true };
}
createUser2({ name: "", email: "", isActive: true });
