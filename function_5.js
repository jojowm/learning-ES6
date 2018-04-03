// 非尾部点参数设置默认值，实际上参数无法省略
function f (x, y = 5, z) {
    return console.log([x, y, z])
}

f() // undefined, 5, undefined
f(1) // 1, 5, undefined 
// f(1, , 2) // 报错
f(1, 2) //1, 2, undefined
f(1, undefined, 2) // 1, 5, 2