// rest参数和箭头函数结合的例子
const numbers = (...nums) => nums

console.log(numbers(1, 2, 3, 4)) // [1, 2, 3, 4]

const headAndTail = (head, ...tail) => [head, tail]

console.log(headAndTail(1, 2, 3, 4)) // [1, [2, 3, 4]]