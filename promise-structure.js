const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    let success = true;
    if(success) {
        resolve("Success")
    } else {
        reject("Error")
    }
});

promise.then(value => {
    console.log(value); // "Success"
    return 'Next value';
}).then(nextValue => {
    console.log(nextValue); // "Next value"
}).catch(error => {
    console.error(error); // "Error"
});

