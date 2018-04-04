// es6
function foo () {
    setTimeout(() => {
        console.log('id:', this.id)
    }, 100)
}

// es5
function foo () {
    var _this = this

    setTimeout(function () {
        console.log('id:', _this.id)
    }, 100)
}

foo()
// 箭头函数中没有this，而是引用外层的this