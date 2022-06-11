const fs = require('fs');

// // reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(data.toString());
// });

// console.log("last line");


// // writing files
// fs.writeFile('./docs/blog1.txt', "Hwfa naaaa!", () => {
//     console.log("file was written")
// });

// fs.writeFile('./docs/blog2.txt', "Hello, Guys!", () => {
//     console.log("file was written")
// });


// // directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
    
//         console.log("Folder created");
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }

//         console.log("Folder deleted");
//     })
// }


// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("file deleted")
    });
}
