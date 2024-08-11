// A simulated asynchronous function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 1000);
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
getData();

