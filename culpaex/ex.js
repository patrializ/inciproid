let buffer = Buffer.alloc(1024); // Example buffer size
let initialOffset = 100; // Example initial offset

// Write some data at initialOffset
let newData = 'Hello, world!';
Buffer.from(newData).copy(buffer, initialOffset);

// If you want to append more data later:
let moreData = 'More data to append';
Buffer.from(moreData).copy(buffer, initialOffset + Buffer.byteLength(newData));

console.log(buffer.toString('utf8')); // Convert buffer to string
