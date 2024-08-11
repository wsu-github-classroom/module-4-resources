// Fetch a remote activity from the bored API
fetch('https://bored-api.appbrewery.com/random') 
    // The fetch() function returns a promise that resolves to the Response to that request, 
    // whether it is successful or not.
    .then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    // The then() method is called when the Promise is resolved
    .then((data) => console.log(data.activity))
    // The catch() method is called when the Promise is rejected
    .catch((error) => {
        console.error(error);
    });

console.log("This will be logged before the fetch response because fetch is an async operation.")