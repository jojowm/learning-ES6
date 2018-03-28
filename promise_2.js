// Promise新建后会立即执行
let promise = new Promise(function(resolve, reject) {
    console.log('Promise')
    resolve()
})

// then方法指定的回调函数，将在当前脚本的所有同步任务执行完，才会执行
promise.then(function() {
    console.log('resolved!')
})

console.log('Hi!')
//  输出为
// Promise
// Hi
// resolved