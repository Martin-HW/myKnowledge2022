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

function countPhotos(road) {
  return road.split("").map((val, ind, arr) => {
    return val === "";
  });
}

console.log(countPhotos(".><.>>.<<")); //11
