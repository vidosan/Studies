// let myFavoritFilm = {
//   name: "The Thing",
//   productionYear: 1982,
//   contry: "USA",
//   director: "John Carpenter",
// };
// myFavoritFilm.proceeds = "$19 629 760";
// myFavoritFilm.getname = () => console.log(`${myFavoritFilm.name}`);
// console.log(myFavoritFilm);
// myFavoritFilm.getname();
// delete myFavoritFilm.productionYear;
// console.log(myFavoritFilm);

randomNumber = function (min, max) {
  return console.log(Math.floor(Math.random() * (max - min + 1) + min));
};
randomNumber(5, 10);

let register = (n) => (n === n.toUpperCase() ? true : false);
console.log(register("a"));

let redactor = (str, find, replace) => {
  while (str.includes(find)) {
    str = str.replace(find, replace);
  }
  console.log(str);
};
redactor(
  "Реализовать x функцию которая x заменяет в строке str, x все вхождения подстроки x find, на подстроку replace.",
  "x",
  "hello"
);
