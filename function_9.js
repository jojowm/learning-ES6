// function sortNumbers () {
//     return Array.prototype.slice.call(arguments).sort()
// }

// console.log(sortNumbers(3, 8, 1))

// rest得到的就是一个真正的数组， 不用转换
const sortNumbers = (...numbers) => numbers.sort()
console.log(sortNumbers(3, 8, 1))
