function foo () {
    setTimeout(() => {
        console.log('id:', this.id)
    }, 100)
}

var id = 21

foo.call({ id: 42 })
// id: 42
// 箭头函数让setTimeout里面的this，绑定在定义时的作用域，而不是指向运行时的作用域