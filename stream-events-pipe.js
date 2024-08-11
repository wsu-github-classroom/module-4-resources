import { createReadStream, createWriteStream } from "fs";
// Create a readable stream
const readableStream = createReadStream('alice29.txt');

// Create a writable stream
const writableStream = createWriteStream('output.txt');

// Handle readable stream events
readableStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
});

readableStream.on('end', () => {
    console.log('No more data to read.');
});

readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

readableStream.on('close', () => {
    console.log('Readable stream closed.');
});

// Handle writable stream events
writableStream.on('drain', () => {
    console.log('Writable stream buffer drained.');
});

writableStream.on('finish', () => {
    console.log('All data written to file.');
});

writableStream.on('error', (err) => {
    console.error('Error writing file:', err);
});

writableStream.on('close', () => {
    console.log('Writable stream closed.');
});

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);