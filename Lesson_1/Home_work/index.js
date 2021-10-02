console.log("Hello World");

let years = 31;
console.log(years + " - " + typeof years);

const myName = "Andrey";
console.log(myName + " - " + typeof myName);
// const myName='vidok_';
// console.log(myName + " - " + typeof myName);

let heWork = true;
console.log(heWork + " - " + typeof heWork);

let noThing = null;
console.log(noThing + " - " + typeof noThing);

let someThing;
console.log(someThing + " - " + typeof someThing);

console.log(
  "==================================================================="
);
const dataUser = {
  fullName: "Sereda Andrey Aleksandrovich",
  pressure: "130 / 90",
  pulse: 80,
  temperature: 36.7,
};
console.log(dataUser);
dataUser.fullName = "xxx";
console.log(dataUser.fullName);

console.log(
  "==================================================================="
);

let dataUser2 = {
  fullName: "Parfilova Nadejda Sergeevna",
  pressure: "95 / 80",
  pulse: 75,
  temperature: 36.5,
};
console.log(dataUser2);
dataUser2.pressure = "100 / 90";
console.log(dataUser2.pressure);
console.log(
  "==================================================================="
);

let id = Symbol("id");
id.toString;
console.log(id);
console.log(id.toString + " - " + typeof id);

const bigint = 1234567890123456789012345678901234567890n;
console.log(bigint + " - " + typeof bigint);
console.log(
  "==================================================================="
);
