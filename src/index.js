console.log("-----------------------------------------");

/**
 * アロー関数
 */

// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("aaa"));

// const func2 = (str) => `${str}です`;

// console.log(func2("func2"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 3));

/**
 * 分割代入
 */
// object
// const myProfile = {
//   name: "aaa",
//   age: 23
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age, aaa = "不定" } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}です。${aaa}`;
// console.log(message2);

// array
// const myProfile = ["aaa", 23];

// const message3 = `名前は${myProfile[0]}で、年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;

// console.log(`${name}と${age}`);

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5]; // [10, 20, 30, 40]
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapとかfilter
 */
const nameArr = ["田中", "山田", "あああ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name + "aaa";
// });

// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "あああ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * &&と||の使い方
 */

// const num = null;
// const fee = num || "未設定";
// console.log(fee);

// const num2 = 100;
// const fee2 = num2 && "設定済み";
// console.log(fee2);

// ||は左側がfalseなら右を返す
// &&は左側がtrueなら右を返す
