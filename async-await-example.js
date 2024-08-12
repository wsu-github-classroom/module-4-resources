// A simulated asynchronous function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) { // true for testing - leads to unreachable code though
                resolve('Data fetched successfully');
            } else {
                reject('Error fetching data');
            }
        }, 3000);
    });
}

// // Async function using await
// async function getData() {
//     try {
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// then and catch
function getData() {
    fetchData()
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call the async function
console.log("fetch the data");
getData();
console.log("data fetched");

