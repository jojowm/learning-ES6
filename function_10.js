function push (arr, ...items) {
    items.forEach(function(item) {
        arr.push(item)
        console.log(item)
    })
}

var a = []
push(a, 1, 2, 3)