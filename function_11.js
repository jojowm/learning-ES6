// 箭头函数和解构结合
const full = ({ first, last}) => first + ' ' + last
let person= {
    first: 'hello',
    last: 'world'
}

console.log(full(person))