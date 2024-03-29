// 6 kyu Sorting on planet Twisted-3-7
// function sortTwisted37(array) {
//   return array
//     .map(twist)
//     .sort((x, y) => x - y)
//     .map(twist);
//   function twist(x) {
//     return +(x + "").replace(/[37]/g, (d) => (d == 3 ? 7 : 3));
//   }
// }
// console.log(sortTwisted37([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// [1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
// console.log(sortTwisted37([3, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
// [12,13,14] -> [12,14,13]
// console.log(sortTwisted37([12, 13, 14]));
// [9,2,4,7,3] -> [2,7,4,3,9]

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// 6 kyu Group in 10s

// const groupIn10s = (...numbers) => {
// let num = [...numbers].sort((a, b) => b - a);
// num =
//   `${num[0]}`.split("").length !== 1
//     ? Number(
//         `${num[0]}`
//           .split("")
//           .slice(0, `${num[0]}`.split("").length - 1)
//           .join("")
//       )
//     : 1;
// let arr2D = new Array(num).fill([...numbers]);
// return arr2D.map((val, ind, arr) => {
//   let biggestNumber = arr[0].sort((a, b) => b - a)[0];
//   console.log(biggestNumber + "");
//   // console.log(arr[0].sort((a, b) => b - a)[0]);
//   return val + "kikin";
// });

//   let one = [...numbers].sort((a, b) => b - a);
//   return one;
// };
// console.log(groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50));
// console.log(groupIn10s(1, 2, 3));
// console.log(groupIn10s(100));

// const person1 = {
//   name: "Juan",
//   say() {
//     console.log(`Mi name's ${this.name}`);
//   },
//   eat() {
//     console.log(`${this.name} is eating ${food}`);
//   },
// };

// const person2 = {
//   name: "jose",
// };

// person1.say();
// person1.say.call(person2);
// person1.say.apply(person2);
// person1.eat.call(person2, "hamburger");
// person1.eat.apply(person2, ["tacos"]);

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// function isAValidMessage(message) {
//   let one = message.split("");
//   let two = one.map((val, ind, arr) => {
//     if (
//       val === "0" ||
//       val === "1" ||
//       val === "2" ||
//       val === "3" ||
//       val === "4" ||
//       val === "5" ||
//       val === "6" ||
//       val === "7" ||
//       val === "8" ||
//       val === "9"
//     ) {
//       return Number(val);
//     } else {
//       return val;
//     }
//   });
//   return two;
// }

// console.log(isAValidMessage("3hey5hello2hi"));
/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// 7 kyu
// Flatten and sort an array

// function flattenAndSort(array) {
//   return [].concat(...array).sort((a, b) => a - b);
// }

// console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// 7 kyu 99 Problems, #1: last in list

// const last = (xs) => {
//   if (xs.length > 0) {
//     return xs.pop();
//   } else {
//     return null;
//   }
// };

// console.log(last([1, 2, 3, 4, 5]));

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// 6 kyu Take a Ten Minutes Walk

// function isValidWalk(walk) {
//   return walk;
// }

// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// function makeChocolates(small, big, goal) {
//   let one = goal - big * 5;
//   let two = one / 2;
//   return two;
// }

// console.log(makeChocolates(4, 1, 13));

// assert.equal(makeChocolates(4, 1, 13), 4);
// assert.equal(makeChocolates(4, 1, 14), -1);
// assert.equal(makeChocolates(2, 1, 7), 1);
// assert.equal(makeChocolates(3, 1, 6), 3);
// assert.equal(makeChocolates(8, 0, 7), -1);
// assert.equal(makeChocolates(8, 0, 7), -1);
/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// 6 kyu
// Unique In Order
// const uniqueInOrder = (iterable) => {
//   let one = [...iterable];
//   let empty = [];
//   for (let i = 0; i < one.length; i++) {
//     if (one[i] !== one[i + 1] && empty) empty = empty.concat(one[i]);
//   }
//   return empty;
// };
// console.log(uniqueInOrder("aAAAABBBCCDAABBB"));
// console.log(uniqueInOrder("ABBCcAD"));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"];
// uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"];
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// function solve(s) {
//   if (s.includes("[backspace]")) {
// let first = s.slice(0, s.indexOf("[backspace]"));
// let two = s.slice(s.indexOf("["));
// let three = [].concat(two);
// return first;
//     return s.split("[backspace]");
//   }
// }
// console.log(solve("abcde[backspace]123[backspace]")); //"abcd"

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// 6 kyu
// Find the unique number

// function findUniq(arr) {
//   let sortedArr = arr.sort((a, b) => {
//     return a - b;
//   });

//   return sortedArr[0] === sortedArr[1]
//     ? sortedArr[sortedArr.length - 1]
//     : sortedArr[0];
// }

// console.log(findUniq([3, 10, 3, 3, 3]));
/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// function countPhotos(road) {
//   return road.split("").map((val, ind, arr) => {
//     return val === "";
//   });
// }

// console.log(countPhotos(".><.>>.<<")); //11

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// function palindrome(string) {
//   // enter the codes
//   return string.split(",");
// }

// console.log(palindrome("Amore, Roma"));
// console.log(palindrome("A man, a plan, a canal: Panama"));
// console.log(palindrome("No 'x' in 'Nixon'"));
// console.log(palindrome("Abba Zabba, you're my only friend"));

// const ascendDescend = (length, minimum, maximum) => {
//   let arr = [];
//   let secondPart = [];
//   for (let i = minimum; i <= maximum; i++) {
//     arr = arr.concat(i);
//     for (let j = Math.max(arr); j >= Math.min(arr); j++) {}
//   }
//   return arr;
// };

// console.log(ascendDescend(5, 1, 3));

//  length: 5, minimum: 1, maximum: 3   ==>  "12321"
//  length: 14, minimum: 0, maximum: 2  ==>  "01210 121012101"
//  length: 11, minimum: 5, maximum: 9  ==>  "56789876567"

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// const f = (num) =>
//   `${num}`
//     .match(/0+/g)
//     .map((v) => v.length)
//     .sort()
//     .pop();

// console.log(f(10002030000));

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// function countSmileys(arr) {
//   return arr.filter((val, ind, arr) => {
//     return val.match(/[:|;][-|~]?[)|D]/g);
//   }).length;
// }
// console.log(countSmileys([":)", ";(", ";}", ":-D"]));

// countSmileys([":)", ";(", ";}", ":-D"]); // should return 2;
// countSmileys([";D", ":-(", ":-)", ";~)"]); // should return 3;
// countSmileys([";]", ":[", ";*", ":$", ";-D"]); // should return 1;

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/
// SOMETHING I FEEL SO PROUD ABOUT
// 6 kyu Make the Deadfish Swim
// const parse = (data) => {
//   let empty = [];
//   let initialValue = 0;
//   let myData = data.split("").filter((val, ind, arr) => {
//     return val !== "x";
//   });
//   myData.reduce((total, val, ind, arr) => {
//     if (val === "i") {
//       return total + 1;
//     } else if (val === "s") {
//       return total * total;
//     } else if (val === "d") {
//       return total - 1;
//     } else if (val === "o") {
//       empty = empty.concat(total);
//       // console.log({ empty });
//       return total;
//     }
//   }, initialValue);
//   if (empty.length === 1) {
//     return empty;
//   } else {
//     return [...empty];
//   }
// };

// console.log(parse("iiisdoso")); //iiisdoso
// console.log(parse("iiisxxxdoso")); // iiisxxxdoso

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// 6 kyu Make everyone happy :)

// function smile(text) {
//   if (text.includes(":(")) {
//     return text.replace(":(", ":)");
//   } else if (text.includes("=[")) {
//     return text.replace("=[", "=]");
//   } else if (text.includes(";-(")) {
//     return text.replace(";-(", ";-)");
//   } else if (text.includes(";~[")) {
//     return text.replace(";~[", ";~]");
//   }
// }

// console.log(smile("Howdy :(")); //"Howdy :)"
// console.log(smile("Never be sad =[")); // 'Never be sad =]'
// console.log(smile("It's been raining all day ;-(")); // 'It\'s been raining all day ;-)'
// console.log(smile("My friend got married ;~[")); // 'My friend got married ;~]
// console.log(smile('Change this `=(` and this `:[`'), 'Change this `=)` and this `:]`');
// console.log(smile('Funny smileys: ;~[ :( :-( :~[ :-['), 'Funny smileys: ;~] :) :-) :~] :-]');
// console.log(smile("The list of positive numbers is [1,2,3,4...]"));
// "The list of positive numbers is [1,2,3,4...]"

// console.log(smile("(((-)(((-)))(-)))")); // (((-)(((-)))(-)));

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// 6 kyu
// Multiples of 3 or 5

// function solution(number) {
//   let sum = 0;
//   for (var i = 3; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(solution(95018));

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/
// function bouncingBall(h, bounce, window) {
//   // your code here
// }

// const one = {
//   name: "martin",
// };

// const two = {
//   name: "ivan",
// };

// const funct1 = (country, age) => {
//   return `My name is ${one.name}, my country is ${country}, my age is ${age}`;
// };

// const kikin = funct1.bind(two);
// console.log(kikin("colombia", 34));

// const one = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(one(20, 5)); //25
// console.log(one(15, 9)); //24
// console.log(one(100, 4)); //104
// dfdiufdiunv;
// sadvwufbsdiuvbs;
// saududbiub;
// const one = () => {
//   sdsfsdfsdf;
//   sfsdfsdf;
//   console.log("hello");
// };
// dfidnfuienfco;
// one();
// one();

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myArray.slice(0, 4);

// console.log(myArray.pop()); //10
// console.log(myArray); //[1....9]

// myArray.push("manita");
// console.log(myArray); //[1....10,"manita"];

//join
//split
//toString()

// myArray.splice(
//   "index where we start",
//   "number of items to be deleted",
//   "number of items to be added"
// );

// console.log(myArray.splice(2, 3, "kikin", "lavolpe", "oswaldo"));
// console.log(myArray);

// myArray.sort((a, b) => {
//   return a - b;
// });
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// myArray.unshift("kikin");
// console.log(myArray);

// myArray.reverse();
// console.log(myArray);

// myArray.slice(0, 4); //
// console.log(myArray.slice(2, 4));

// let myname = "martin";
// myname = "ivan";

// for (let i = 1; i < 100; i = i + 5) {
//   console.log(i);
// }

// var x = 10;

// function foo() {
//   var y = 20;
//   function bar() {
//     var z = 15;
//     var output = x + y + z;
//     console.log(output);
//     return;
//   }
//   return bar;
// }

// foo();

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// Programa donde invoques una función que reciba un array()
// con una cantidad x de números y queremos que muestres en
// consola o en pantalla, el número de veces en el que se repite un número dentro del array

// ejemplo[(1, 2, 3, 1)];
// 1, 2;
// 2, 1;
// 3, 1;

// const myFunction = (myArr) => {
//   let sortedArr = myArr.sort();

//   let count = 0;
//   for (let i = 0; i <= sortedArr.length - 1; i = i + 1) {
//     if (sortedArr[i] === sortedArr[i + 1]) {
//       console.log(`${sortedArr[i]}: ${(count = count + 1)}`);
//     } else {
//       console.log(`${sortedArr[i]}: ${(count = 1)}`);
//     }
//   }
// };
// myFunction([1, 2, 3, 1, 1, 1, 2, 1]);

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// 6 kyu
// zipWith

// function zipWith(f, A = [], B = []) {
//   var smaller = B.length > A.length ? A : B;
//   return smaller.map((v, i, RA) => f(A[i], B[i]));
// }

// console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
// =>  [1,10,100,1000]

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// 6 kyu
// Difference of perfect squares displayed as sum of consecutive odd numbers

// function squaresToOdd(sqr1, sqr2) {
//   // return sqr1 ** 2;
//   if (sqr1 > sqr2) {
//     let substraction = sqr1 ** 2 - sqr2 ** 2;
//     let empty = [];
//     for (let i = 1; i <= substraction; i++) {
//       empty = empty.concat(i);
//     }
//     empty.filter((val, ind, arr) => {
//       if (val % 2 !== 0) console.log(val);
//     });
//   }
//   // else{
//   //   return  sqr2 ** 2 - sqr1 ** 2;
//   // }
// }
// console.log(squaresToOdd(9, 5));

// function squaresToOdd(sqr1, sqr2) {
//   let diff = sqr1 - sqr2;
//   let substraction = sqr1 ** 2 - sqr2 ** 2;
//   let empty = [];
//   for (let i = 1; i <= substraction; i++) {
//     empty = empty.concat(i);
//   }
//   return empty.filter((val, ind, arr) => {
//     if (val % 2 !== 0) return val;
//   });
// }
// console.log(squaresToOdd(9, 5));

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

//bubble sort

// const myFunction = (myArr) => {
//   for (let i = 0; i < myArr.length; i++) {
//     for (let j = 0; j < myArr.length; j++) {
//       if (myArr[j] > myArr[j + 1]) {
//         let aux = myArr[j];
//         myArr[j] = myArr[j + 1];
//         myArr[j + 1] = aux;
//       }
//     }
//   }
//   return myArr;
// };
// console.log(myFunction([100, 35, 48, 62]));

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// function createPhoneNumber(numbers) {
//   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// function longestConsec(strarr, k) {
//   let one = "strarr[i] ".repeat(k);
//   return one.split(" ");
//   // for (let i = 0; i < strarr.length; i++) {
//   //   console.log(strarr[i] + strarr[i + k]);
//   // }
// }

// console.log(
//   longestConsec(
//     ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
//     2
//   )
// );

/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

// 6 kyu
// The largest "mirror"

const maxMirror = (array) => {
  let one = array.join("");
  let reverseOne = array.reverse().join("");
  if (reverseOne === one) {
    return array.length;
  } else {
    return array.reverse();
  }
};

console.log(maxMirror([1, 2, 2, 1]));
console.log(maxMirror([1, 2, 2, 1, 3]));
console.log(maxMirror([1, 2, 3, 8, 9, 3, 2, 1, 9, 8]));
