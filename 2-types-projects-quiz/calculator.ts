/**
 * Let's make a calculator 🧮
 */

/**
 * 첫번째 시도
 */
// const calculate = (name: string, left: number, right: number) => {
//   switch (name) {
//     case "add":
//       return add(left, right);
//     case "substract":
//       return substract(left, right);
//     case "multiply":
//       return multiply(left, right);
//     case "divide":
//       return divide(left, right);
//     case "remainder":
//       return remainder(left, right);
//   }
// };

// const add = (left: number, right: number) => {
//   return left + right;
// };

// const substract = (left: number, right: number) => {
//   return left - right;
// };

// const multiply = (left: number, right: number) => {
//   return left * right;
// };

// const divide = (left: number, right: number) => {
//   return left / right;
// };

// const remainder = (left: number, right: number) => {
//   return left % right;
// };

/**
 * Best Practice
 * 1. type 을 이용해서 넘어오는 Command 인자를 string이 아니라 정해진 command로 타입 지정
 * 2. 따로 함수로 연결 안하고 간단하게 return
 * 3. default 에서는 에러 핸들링
 */
type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

const calculate = (command: Command, a: number, b: number) => {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw Error("알 수 없는 커맨드야.");
  }
};

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
