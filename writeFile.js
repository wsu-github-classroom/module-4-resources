// Here we import the promises API, but we then alias it with fs. 
// This is because the promises API is a collection of functions that 
// return promises. We can then use the await keyword to wait for the promise to resolve.
import { promises as fs } from 'fs';

async function writeFileAsync(filePath, data) {
    try {
        await fs.writeFile(filePath, data, 'utf8');
        console.log('File has been written');
    } catch (err) {
        console.error('Error writing to file:', err);
    }
}
let data = '';
for(let i = 0; i < 5; i++) {
    data += 'This is line ' + i + '\n';
}
writeFileAsync('fileToWrite.txt', data);