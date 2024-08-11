// Here we import the promises API, but we then alias it with fs. 
// This is because the promises API is a collection of functions that 
// return promises. We can then use the await keyword to wait for the promise to resolve.
import {promises as fs} from 'fs';

async function readFileAsync(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFileAsync('fileToRead.txt');
console.log("Reading file...");