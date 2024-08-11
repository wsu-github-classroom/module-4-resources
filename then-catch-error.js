// Code to demonstrate how to handle errors in promises
function getData() {
    // The fetch function returns a promise object that resolves to the Response to that request
    return fetch('https://httpstat.us/200')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + ' - ' + response.statusText);
            }
            // The response object has a text() method that returns a promise that resolves with the body of the response as a text string
            return response.text();
        })
        .then(data => {
            return data; // this is the response data, which is text. 
        })
        .catch(error => {
            console.error("Promise threw error: " + error);
        });
}

let gData = null; // Global variable to store the data
// Call the promise returning function
getData().then(data => {
    gData = data;
    console.log(data);
});
// This code will run before the fetch operation completes
console.log(`Spitting out data before the fetch response: ${gData}`);
console.log("This will be logged before the fetch response because fetch is an async operation.");

