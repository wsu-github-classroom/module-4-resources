// Here we import the promises API, but we then alias it with fs. 
// This is because the promises API is a collection of functions that 
// return promises. We can then use the await keyword to wait for the promise to resolve.
import { promises as fs } from 'fs';

async function appendFileAsync(filePath, data) {
    try {
        await fs.appendFile(filePath, data, 'utf8');
        console.log('File has been appended');
    } catch (err) {
        console.error('Error appending to file:', err);
    }
}
let data = '';
for(let i = 6; i <= 10; i++) {
    data += 'This is line ' + i + '\n';
}
appendFileAsync('fileToWrite.txt', data);