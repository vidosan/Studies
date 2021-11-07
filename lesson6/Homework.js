// ; 1. Преобразовать строку в массив слов

// ; Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

var str = "Каждый охотник желает знать";
function stringToarray(str) {
  return console.log(str.split(" "));
}
var arr = stringToarray(str);
// 2. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length),
// которая возвращает подстроку, состоящую из указанного количества символов.
var str = "Каждый охотник желает знать";
function delete_characters(str, length) {
  let temp = "";
  for (i = 0; i < length; i++) {
    temp += str[i];
  }
  return console.log(temp);
}
delete_characters(str, 10);
// 3. Вставить тире между словами строки
// Напишите функцию insert_dash(str),
// которая принимает строку str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в верхний регистр.
var str = "HTML JavaScript PHP";
function insert_dash(str) {
  str = str.replace(/ /gi, "-");
  return console.log(str);
}
insert_dash(str);
// 4. Сделать первую букву строки прописной
// Напишите функцию, которая принимает строку в
//  качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
var str = "string not starting with capital";
function cursive_letter(str) {
  let resultant = "";
  for (i = 0; i < str.length; i++) {
    if (i == 0) {
      resultant += str[i].toUpperCase();
      continue;
    }
    resultant += str[i];
  }
  return resultant;
}
cursive_letter(str);

// 5. Первая буква каждого слова заглавная
// // Напишите функцию capitalize(str), которая возвращает строку,
//  в которой каждое слово начинается с заглавной буквы.
var str = "каждый охотник желает знать";
function capitalize(str) {
  res = "";
  strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    res += cursive_letter(strArr[i]) + " ";
  }
  console.log(res);
}
capitalize(str);

// 6. Смена регистра символов строки
// Напишите функцию change_register(str),
// которая принимает в качестве аргумента строку и и заменяет регистр
// каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК»,
//  то на выходе должно быть «кАжДыЙ оХоТнИк».
var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";
function change_register(str) {
  let sumStr = "";
  let temp;
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      temp = str[i].toUpperCase();
    }
    if (str[i] === str[i].toUpperCase()) {
      temp = str[i].toLowerCase();
    }
    sumStr += temp;
  }
  return console.log(sumStr);
}
change_register(str);
// 7. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
var str = "-e.very., -/ hunter #! wishes ;: {} to $ % ^ & * know";
function remove_char(str) {
  str = str
    .replace(/[-,.-/#!;:{}$%^&*]/gi, "")
    .split(" ")
    .filter((notSpace) => notSpace != "")
    .reduce((fullStr, add) => {
      return `${fullStr} ${add}`;
    });
  return console.log(str);
}
remove_char(str);
//   for (i = 0; i < str.length; i++) {
//     if (str[i] == "") {
//       str[i].pop;continue;
//     }
//     strSum +=str[i];
//   }
//   console.log(strSum);
// }

// 8. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины
// числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.
function zeros(num, len, sign) {
  let numDl = String(num).length;
  console.log(len - numDl);
  if (len - numDl > 0) {
    for (i = 0; i < len - numDl; i++) {
      num *= 10;
    }
    sign = "+";
  }
  if (len - numDl < 0) {
    for (i = 0; i < numDl - len; i++) {
      num /= 10;
    }
    sign = "-";
  } else {
    num;
    sign = "";
  }
  return console.log(num + sign);
}
zeros(5000, 3);

// 9. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
str1 = "asdSgAsd";
str2 = "asdsgasd";
let comparison = (str1, str2) => {
  return console.log(str1.toLowerCase() === str2.toLowerCase() ? true : false);
};
comparison(str1, str2);

// 10. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в
//  строкеstr1 без учёта регистра символов.
str1 = "asdSgAsd";
str2 = "asD";
function insensitive_search(str1, str2) {
  return console.log(str1.includes(str2) ? true : false);
}
insensitive_search(str1, str2);
// 11. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль
// написания составных слов строки в CamelCase, при котором несколько
// слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

str = "hEllo woRld ProverKa TExTa MnoGo";
function initCap(str) {
  let strSum = "";
  let rez = "";
  str = str.split(" ");
  for (i = 0; i < str.length; i++) {
    for (a = 0; a < str[i].length; a++) {
      rez = str[i][a].toLowerCase();
      if (a == 0) rez = str[i][a].toUpperCase();
      strSum += rez;
    }
  }
  return strSum;
}
console.log(initCap(str));
// 12. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания
// составных слов строки из CamelCase в snake_case, при котором несколько
//  слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
// function initSnake(str) {
//   var str = str.replace(/[A-Z]/g, function (str) {
//     return "_" + str.toLowerCase();
//   });
// }
function initSnake(str) {
  strSum = "";
  str = initCap(str);
  for (i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase() && i != 0) {
      strSum += "_" + str[i].toLowerCase();
      continue;
    }
    strSum += str[i].toLowerCase();
  }
  return strSum;
}
console.log(initSnake(str));

console.log("123");
// 13. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая возвращает строку
//  повторяемую определённое количество раз.
function repeatStr(str, n) {
  for (i = 0; i < n; i++) {
    console.log(str);
  }
}
repeatStr(str, 3);

// 14. Получить имя файла
// Напишите функцию path(pathname), которая возвращает
//  имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
let pathname = "/home/user/dir/file.txt";
function path(pathname) {
  return pathname.substr(pathname.lastIndexOf("/"));
}
console.log(path(pathname));
// 15. Заканчивается ли строка символами другой строки
// // Создайте метод объекта String endsWith(),
// который сравнивает подстроку str1 с окончанием
//  исходной строки str и определяет заканчивается ли строка символами подстроки.
var str = "Каждый охотник желает знать";
var str1 = "скрипт";
var str2 = "знать";
// String.prototype.endsWith =
function endsWith(str, substring) {
  return console.log(str.includes(substring) ? true : false);
}
endsWith(str, str2);
// 16. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos),
// которая возвращает часть строки, расположенную после
//  или до указанного символа char в зависимости от параметра pos.
var str = "Астрономия — Наука о небесных телах";
function getSubstr(str, char, pos) {
  pos === "after" ? console.log(str.substr(str.indexOf(char))) : "";
  pos === "before" ? console.log(str.substr(0, str.indexOf(char) + 1)) : "";
}
getSubstr(str, "—", "after");
// 17. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos),
// которая вставляет подстроку substr в указанную позицию pos строки str.
//  По умолчанию подстрока вставляется в начало строки.
function insert(str, substr, pos) {
  return (newstr = `${str.substr(0, pos)}${substr}${str.substr(pos)}`);
}
console.log(insert(str, "'возможно'", 10));
console.log(insert(str, "'возможно'", 0));

// 18. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку,
//если она длиннее указанного количества символов n.
// Усеченная строка должна заканчиваться троеточием «...»(если не задан параметр symb) или заданным символом symb.
function limitStr(str, n, symb = "...") {
  return str.substr(0, n) + symb;
}
console.log(limitStr(str, 10, '(>">)(<"<)'));

// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch),
//  которая возвращает количество символов stringsearch в строке str.

var symb = "о",
  str = "Астрономия'возможно' — Наука о небесных телах";
function count(str, symb) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    str.includes(symb) ? count++ : "";
    str = str.substr(str.indexOf(symb) + 1);
    if (str === str.substr(str.indexOf(symb) + 1)) break;
  }
  return console.log(count);
}
count(str, symb);
// 21. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
var str = "    Max is a good      boy     ";
function strip(str) {
  str = str
    .split(" ")
    .filter((el) => el != "")
    .reduce((fullStr, currentValue) => `${fullStr} ${currentValue}`
    );
  return str;
}
console.log(strip(str));
// 23. Удалить лишние слова из строки

// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// var str = "Сила тяжести приложена к центру масс тела";

// function cutString(str, n) {
//     ...ваш код...
// };

// 24. Найти слово в строке
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// var str = 'abc def ghi jkl mno pqr stu';

// function findWord(word, str) {
//     ...ваш код...
// };
