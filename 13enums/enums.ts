/*
bu tanımlamada AISLE den sonraki değişkenler de 
11,12,13 değerlerine sahip olurlar
*/
enum SeatChoice {
  AISLE = 10,
  MIDDLE,
  WINDOW,
  FOURTH,
}

const hcSeat = SeatChoice.AISLE;

/*
## 
*/
enum SeatChoice2 {
  AISLE = "aisle",
  MIDDLE =3
}

const hcSeat2 = SeatChoice.AISLE;

/*
NOT : Evet, TypeScript'te enum'lar kullanırken, çıktının JavaScript'te çok büyük olmasını önlemek için 
const enum kullanmak mantıklıdır. const enum'lar, TypeScript derleme zamanı optimizasyonu yaparak, 
enum değerlerinin sabitlere dönüştürülmesini sağlar. Bu da JavaScript çıktısında daha az kod 
ve performans artışı anlamına gelir. Bununla birlikte, const enum'ların bazı kısıtlamaları vardır
*/

const enum Colors {
    Red = 1,
    Green,
    Blue
  }
  
const myColor = Colors.Red;
  
//## bu örneğin js hali sadece budur
//const myColor = 1




export {};
