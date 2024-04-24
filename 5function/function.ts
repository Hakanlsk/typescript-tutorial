//**bu şekilde uygulandığında function sonucu any olarak kabul edilir, YANLIŞ KULLANIM
function addTwo(num) {
  return num + 2;
}

console.log(addTwo("5"));

//**DOĞRU KULLANIM

function addThree(num: number) {
  return num + 3;
}

let sayi = addThree(3);
console.log(sayi);

function getUpper(val: string) {
  return val.toUpperCase();
}

console.log(getUpper("hakan"));


function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("hakan","@gmail",true)

function loginUser(name: string, email: string, isPaid: boolean=true) {}

loginUser("hakan","@gmail")

//yanlış kullanım, num parametresine number verdigimiz icin string return edildigi halde hata vermiyor
//bunun dogru kullanimi bir sonraki dosyada
function addFour(num: number) {
    return "hello";
  }
  
  let sayi2 = addFour(3);

console.log(sayi2)//hello



export {};
