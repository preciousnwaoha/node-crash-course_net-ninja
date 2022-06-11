const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});

const writeStream = fs.createWriteStream('./docs/blog4.txt');

// // not using piping
// readStream.on('data', (chunk) => {
//     console.log('...... new chunk ......');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });


// using piping
readStream.pipe(writeStream);

