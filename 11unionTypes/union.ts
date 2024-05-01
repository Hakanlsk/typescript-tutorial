/*
Union Type (Birleşik Tip), bir değişkenin birden fazla tipte olabileceğini belirtmek için 
kullanılan bir yapıdır. Bir değişkeni tanımlarken birden fazla olası değere izin verir.
*/

let score: number | string = 33;
score = 44;
score = "hakan";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let person: User | Admin = { name: "ahmet", id: 222 };

person = { username: "ahmet", id: 555 };

/*
##
union types kullanımı fonksiyonlarda sık sık kullanılır
çünkü fonksiyonlar birden fazla tipte değer alıp 
birden fazla tipte değer döndürebilirler
*/

function getDbId(id: number | string) {
  //making some API calls
  console.log(`DB id is ${id}`);
}

getDbId(5);
getDbId("hakan");

/*
##
yukardaki kullanımda iki parametre için de hata vermez ama bu kullanımda şöyle bir sorun var
bu fonksiyona içinde sadece number ya da sadece string bir değere uygulanabilecek bir metod ya da fonksiyon olabilir
örnek aşağıdaki kod bloğunda
*/

function getId(id: string | number) {
  id.toLowerCase();
}

getId(10);
getId("hakan");

/*
##
bu tarz bir çözüm izlenebilir
*/
function getId2(id: string | number) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}
getId2(10);
getId2("hakan");

/*
## arraylerde union types
*/

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];

//
const data3: (string | number | boolean)[] = ["1", "2", "3", 4, false];
