const promise = new Promise (function (resolve, reject) {
    try {
        throw new Error('test')
    } catch (e) {
        reject(e)
    }
})

promise.catch(function (error) {
    console.log(error)
})

// 写法二
const promise = new Promise (function(resolve, reject) {
    reject(new Error ('test'))
})

promise.catch(
    error => console.log(error)
)