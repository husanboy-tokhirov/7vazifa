//1-MISOL
// let son = +prompt("Son kiriting");
// function result(){
//     let i = son ** 3;
//     return i
// }
// let res = result();
// document.write(res); 

//2-MISOL
// let numA = +prompt("a sonini kiriting");
// let numB = +prompt("b sonini kiriting");
// function result(numA, numB) {
//     let result = numA + numB
//     return result
// }
// let res = result(numA, numB);
// document.write(res)

// 3-MISOL
// let numA = +prompt("a sonini kiriting");
// let numB = +prompt("b sonini kiriting");
// function result(numA, numB) {
//     let result = numA - numB
//     return result
// }
// let res = result(numA, numB);
// document.write(res)

// 4-MISOL
// let son = +prompt("Son kiriting");
// function result(){
//     let i = son ** 2;
//     return i
// }
// let res = result();
// document.write(res);

// function result2(){
//     let o = son ** 3;
//     return o
// }
// let two = result2()
// document.write(two)

// function result3(){
//     let a = son ** 4;
//     return a
// }
// let three = result3()
// document.write(three)
 
//5-MISOL
// function toqson (n){
//     let toqsonlar = [];
//     for (let i = 1; i <= n; i++){
//         if (i % 2 == 1){
//             toqsonlar.push(i)
//         }
//     }
//     return toqsonlar
// }
// let n = +prompt("Son kiriting");
// let toqsonlar = toqson(n);
// document.write(toqsonlar)

//6-MISOL
// function juftson (n){
//     let juftsonlar = [];
//     for (let i = 1; i <= n; i++){
//         if (i % 2 == 0){
//             juftsonlar.push(i)
//         }
//     }
//     return juftsonlar
// }
// let n = +prompt("Son kiriting");
// let juftsonlar = juftson(n);
// document.write(juftsonlar)

//7-MISOL
// let r = +prompt("Birorta raqam kiriting");
// function first() {
//      r++
//      return r
// }
// let result = first()
// document.write(result)
// let s = +prompt("Birorta raqam kiriting");
// function second() {
//      s--
//      return s
// }
// let end = second()
// document.write(end)

//8-MISOL
// function boluvchison (n){
//     let boluvchisonlar = [];
//     for (let i = 1; i <= n; i++){
//         if (n % i == 0){
//             boluvchisonlar.push(i)
//         }
//     }
//     return boluvchisonlar
// }
// let n = +prompt("Son kiriting");
// let boluvchisonlar = boluvchison(n);
// document.write(boluvchisonlar)

//9-MISOL
// let option;

// while(!['+','-', '/', '*', '0'].includes(option)) {
//      option = prompt("+ - addition\n- - subtraction\n * - multiplication\n / - division\n\n 0 - exit");
// };
// let son1;
// while(!son1 || typeof son1 !== "number") {
//      num1 = +prompt("Son1: ");
// } 
// let son2;
// while(!son2 || typeof son2 !== "number") {
//      son2 = +prompt("Son2: ");
// }
// function app() {
//      switch(option) {
//           case "+": {
//                document.write(`s1 + s2 = ${son1 + son2}`);         
//                break
//           }
//           case "-": {
//                document.write(`s1 - s2 = ${son1 - son2}`);         
//                break
//           }
//           case "*": {
//                document.write(`s1 * s2 = ${son1 * son2}`);
//                break
//           }
//           case "/": {
//                document.write(`s1 / s2 = ${son1 / son2}`);
//                break
//           }
//           case "0": {
//                document.write("Goodbye");
//                break
//           }
//           default: {
//                document.write("Invali option");
//           }
//      }
// }
// app();

//10-MISOL
// let a = 1;
// let b = 100;
// function karra() {
//      for (let i = 1; i < 10; i++) {
//           for(let k = 1; k <= 10; k++) {
//                console.log(`${i} * ${k} = ${i * k}`)
//           }
//      }     
// }
// let result = karra();