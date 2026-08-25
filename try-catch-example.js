// Code to demonstrate how to handle errors in promises
async function getData() {
    try {
        // The fetch function returns a promise object that resolves to the Response to that request
        const response = await fetch('https://httpstat.us/200');
        if (!response.ok) {
            throw new Error(response.status + ' - ' + response.statusText);
        }
        // The response object has a text() method that returns a promise that resolves with the body of the response as a text string
        return await response.text();
    } catch (error) {
        console.error("Promise threw error: " + error);
    }
}

let gData = null; // Global variable to store the data
// Await the promise returned by the async function
async function setGlobalData() {
    gData = await getData();
    console.log(gData);
}

setGlobalData();
// This code will run before the fetch operation completes
console.log(`Spitting out data before the fetch response: ${gData}`);
console.log("This will be logged before the fetch response because fetch is an async operation.");

