// es6允许为函数参数设默认值
function log (x, y = 'world') {
    console.log(x, y)
}

log('hello')
log('hello', 'china')
log('hello', '')
