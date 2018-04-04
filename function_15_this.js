var handler = {
    id: '123456',

    init: function () {
        document.addEventListener('click',
            event => this.doSomething(event.type), false)
    },

    doSomething: function (type) {
        console.log('Handling' + type + ' for ' + this.id)
    }
}
// 箭头函数里的this总是指向handler对象