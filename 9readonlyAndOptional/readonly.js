"use strict";
/*
# readonly

## TypeScript'te, "readonly" anahtar kelimesi, bir özelliğin veya bir değişkenin sadece okunabilir olduğunu
belirtmek için kullanılır. Bir alanın, değişkenin veya parametrenin değiştirilmemesi gerektiğini göstermek için kullanılır.
Bu, özellikle nesneler ve sınıflar için yararlı olabilir ve değişikliklerin sınırlanmasını sağlayarak veri tutarlılığını artırır.
## Bir alanı "readonly" olarak işaretlediğinizde, o alana ilk değer ataması yapılabilir,
ancak bir kez atandıktan sonra bu alanın değeri değiştirilemez.

# optional

## TypeScript'te bir özelliği opsiyonel (isteğe bağlı) hale getirmek için o özelliğin adının sonuna bir soru işareti ? koyulur.
Opsiyonel bir özellik, bu özelliğin değeri olabileceği gibi olmayabileceğini gösterir.
Bu, özellikle nesneler ve arabirimler (interface'ler) için kullanılır.

## Opsiyonel bir özellik, değer atanmadan önce undefined olabileceği için, TypeScript kodunun güvenliğini sağlamak için
ekstra kontrol gerektirebilir.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "1234",
    name: "hakan",
    email: ".com",
    isActive: false
};
//readonly olmayan degisken degistirilebilir ama readonly olan _id degistirelemez
myUser.name = "ahmet";
myUser.email = "@gmail.com";
myUser.credcardDetails = 5555;
