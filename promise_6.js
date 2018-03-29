const getJSON = function (url) {
    const promise = new Promise (function(resolve, reject) {
        const handler = function () {
        //    console.log(this) 
           if (this.readyState !== 4) {
               return;
           }
           if (this.status === 200) {
               resolve(this.response)
           } else {
               reject(new Error(this.statusText))
           }
        }
        const client = new XMLHttpRequest();
        client.open('GET', url)
        client.onreadystatechange = handler
        client.responseType = 'json'
        client.setRequestHeader('Accept', 'application/json')
        client.send()
    })
    return promise
}

// getJSON('./post.json').then(function (post) {
//     return getJSON(post.commentURL)
// }).then(function funA (comments) {
//     console.log('resolved:', comments)
// }, function funB (err) {
//     console.log('rejected:', err)
// })

getJSON('./post.json').then(
    post => getJSON(post.commentURL)
).then(
    comments => console.log('resoled', comments),
    err => console.log('rejected:', err)
)