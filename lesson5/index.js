// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// function square(a) {
//   return console.log(a ** 2);
// }
// square(8);
let square = (a) => a ** 2;
console.log(square(5));
// Сделайте функцию, которая возвращает сумму двух чисел
// function sum(a, b) {
//   return console.log(a + b);
// }
// sum(1, 2);
let sum = (a, b) => a + b;
console.log(sum(1, 2));
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function math(a, b, c) {
//   return console.log((a - b) / c);
// }
let math = (a, b, c) => (a - b) / c;
console.log(math(30, 10, 2));
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function day(x) {
  if (x === 1) {
    console.log("Понедельник");
  } else if (x === 2) {
    console.log("Вторник");
  } else if (x === 3) {
    console.log("Среда");
  } else if (x === 4) {
    console.log("Четверг");
  } else if (x === 5) {
    console.log("Пятница");
  } else if (x === 6) {
    console.log("Суббота");
  } else if (x === 7) {
    console.log("Воскресенье");
  } else {
    console.log("error");
  }
}
day(3);

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

let truly=(a, b) =>{(a == b)?console.log(true):console.log(false);};

truly(1, 1);


// //  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
// //  больше 10 - пусть вернет true, а если нет то - false.
// let sumTen = (a, b) => {
//   if (a + b > 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(sumTen(1, 2));
// // Сделайте функцию, которая параметром принимает число и
// // проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
// let fun = (a) => {(a < 0)?true:false;
// };
// fun(-1);
// // Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
// //  Если это так - пусть функция возвращает true, если не так - false.
// let isNumberInRange = (a) => {(a > 0 && a < 10)? true:false};
// isNumberInRange(55);
// //  Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
// // Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
// let arr = [10, 1, 6, 55, 2, 555, 3, 4, 5, 6, 11];
// let arr2 = [0];
// function masiv(arrx, arry) {
//   for (i = 0; i < arrx.length; i++) {
//     if (isNumberInRange(arrx[i])) arry.push(arrx[i]);
//     else;
//   }
//   return console.log(arry);
// }
// masiv(arr, arr2);

// // Сделайте функцию getDigitsSum (digit - это цифра),
// // которая параметром принимает целое число и возвращает сумму ег о цифр.
// let getDigitsSum = (digit) => {
//   let sum = 0;
//   let str = String(digit);
//   for (let i = 0; i < str.length; i++) sum += Number(str[i]);
//   return sum;
// };
// getDigitsSum(1623);
// // Найдите все года от 1 до 2020, сумма цифр которых равна 13.
// //  Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// // let arrz = [];
// // for (i = 1; i < 2021; i++) {
// //   if (getDigitsSum(i) === 13) {
// //     console.log(i);
// //     arrz.push(i);
// //   }
// // }
// let arrz = [];
// for (i = 1; i < 2021; i++) {(getDigitsSum(i) === 13)? console.log(i):""};

// console.log(arrz);
// // Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.
// //  Если четное - пусть функция возвращает true, если нечетное - false.
// let ifEven = (even) =>(even % 2 === 0)?true:false
// console.log(ifEven(98));
// // Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
// //  Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
