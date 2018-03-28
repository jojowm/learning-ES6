function timeOut (ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done')
    })
}

timeOut(1000).then((value) => {
    console.log(value)
})