/**
 * アロー関数
 */

// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("aaa"));

const func2 = (str) => `${str}です`;

console.log(func2("func2"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 3));
