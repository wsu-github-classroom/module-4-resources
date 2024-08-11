
// Code to demonstrate how to handle errors in promises
async function getData() {
    try{ 
        let response = await fetch('https://httpstat.us/200')
        if(!response.ok) {
            throw new Error(response.status + ' - ' + response.statusText);
        }
        return await response.text();
    } catch(error) {
        console.error("Promise threw error: " + error);
    }
}
// Global data to demonstrate the use of delayed setting of data. 
let gData = null;
// Create a function to set the global data asychronously
async function setGlobalData() {
    gData = await getData();
    console.log(`This is after the fetch response: ${gData} `);
}
// Call the function to set the global data
setGlobalData();

/** 
 * The following shows how you can call the async function in different ways and use the data returned 
 * from the fetch operation. Uncomment the code below to see the different ways you can call the async function.
 */
// (async () => {
//     gData = await getData();
//     console.log(`This is after the fetch response: ${gData} `);
// })();

// getData().then(data => {
//     gData = data;
//     console.log(`Spitting out data after the fetch response: ${data}`);
// });

console.log(`Spitting out data before the fetch response: ${gData}`);
console.log("This will be logged before the fetch response because fetch is an async operation.");

