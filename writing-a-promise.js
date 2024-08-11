// create a new Promise object
let myPromise = new Promise((resolve, reject) => {
    // We simulate a async operation with a timeout
    setTimeout(() => {
        let success = true; // Change this to false to see the reject scenario
        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed.");
        }
    }, 1000);
});

// Using the Promise
myPromise
    // The then() method is called when the Promise is resolved
    .then((message) => {
        console.log(message); 
    })
    // The catch() method is called when the Promise is rejected
    .catch((error) => {
        console.error(error); 
    });
