// 参数默认值惰性求值(每次函数执行时，才会运算参数值)
let x = 99
function foo (p = x + 1) {
    console.log(p)
}

foo()

x = 100
foo()