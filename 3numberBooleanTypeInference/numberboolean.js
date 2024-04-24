"use strict";
//**number
Object.defineProperty(exports, "__esModule", { value: true });
//hem int hem float için number kullanılır
var userId = 223344.3;
//yuakrdaki kullanım degildir bu sekilde yaparsak ts degerin ne olduguna kendi karar verir(dogru yol)
var userId2 = 3332.5;
userId2.toFixed();
//**boolean
var isLoggedIn = true;
