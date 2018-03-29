const p1 = new Promise (function (resolve, reject) {
    console.log('p1 start')
    setTimeout(() => {console.log('p1');reject(new Error ('fail'))}, 3000)
})

const p2 = new Promise (function (resolve, reject) {
    console.log('p2 start')
    setTimeout(() => {console.log('p2');resolve(p1)}, 1000)
})

p2
    .then(result => console.log(result))
    .catch(error => console.log(error))