// Дайте ответ, что будет в результате
//  выполнения данных ниже примеров.
//  С объяснением, почему это так.

let x = "кот" > "код";
let y = typeof x;

console.log(`"кот" > "код" === ${x} тип ${y},потому что Т > Д`);

x = "2" + 2 * "2";
y = typeof x;
console.log(`"2" + 2 * "2" === ${x} тип ${y},потому что  строка + 2 * строку`);

x = undefined == null;
y = typeof x;
console.log(
  `undefined == null ${x} тип ${y},потому что равны ничему, кроме самих себя  `
);

x = undefined != null;
y = typeof x;
console.log(`undefined != null ${x} тип ${y},потому что `);

x = null == 0;
y = typeof x;
console.log(`null == 0; ${x} тип ${y},потому что `);

x = 2 > "3";
y = typeof x;
console.log(`2 > "3" ${x} тип ${y},потому что  2 не больше 3`);

x = null - false + true;
console.log(`null - false + true ${x} тип ${y},потому что  0 - 0 + 1 `);
x = 1 / "l";
y = typeof x;
console.log(`1 / "l" ${x} тип ${y},потому что число на строку`);
x = "2" * "3";
y = typeof x;
console.log(`"2" * "3" ${x} тип ${y},потому что  число на число`);
x = 4 + 5 + "O";
y = typeof x;
console.log(`4 + 5 + "O" ${x} тип ${y},потому что число + число +строка `);
x = "l" + 4 + 5;
y = typeof x;
console.log(`"l" + 4 + 5 ${x} тип ${y},потому что строка + число+ число`);
x = "4" - 2;
y = typeof x;
console.log(`"4" - 2 ${x} тип ${y},потому что  число - число `);
x = "4" - "4x";
y = typeof x;
console.log(`"4" - "4x" ${x} тип ${y},потому что  число - строка`);
x = "23" == 23;
y = typeof x;
console.log(`"23" == 23 ${x} тип ${y},потому что число = числу `);
x = null == false;
y = typeof x;
console.log(`null == false ${x} тип ${y},потому что нул равен только себе `);
x = " -4 " / 0 + 1;
y = typeof x;
console.log(`" -4 " / 0 + 1 ${x} тип ${y},потому что  -4/0 `);
x = null + 1;
y = typeof x;
console.log(`null + 1 ${x} тип ${y},потому что 0+1 `);
x = undefined + null;
y = typeof x;
console.log(`undefined + null ${x} тип ${y},потому что undefined+число = NAN`);
y = typeof x;
console.log(`1 === "1" ${x} тип ${y},потому что число не === строке `);
x = "2" > 10;
y = typeof x;
console.log(`"2" > 10 ${x} тип ${y},потому что 2 как число не больше 10`);
x = NaN == undefined;
y = typeof x;
console.log(`NaN == undefined ${x} тип ${y},потому что NAN false`);
