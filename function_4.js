// 参数默认值与解构赋值
function foo ({x, y = 5}) {
   console.log(x, y) 
}

foo({}) // undefined, 5
foo({x: 1}) // 1, 5
foo({x: 1, y: 2}) //1, 2
foo() // TypeError: Cannot read property 'x' of undefined

// function foo ({x, y = 5} = {}) {
//     console.log(x, y)
// }
// foo() // undefined, 5