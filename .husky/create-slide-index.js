
console.log('Creating slide index...');

// Import the filesystem module
const fs = require('fs');
const util = require('util');
const directory = '../docs/slides'
let filesNames = [];
let slides = {}
let index = 0
// Function to get current filenames in a directory
fs.readdir(directory, (err, files) => {
    if (err)
        console.log(err);
    else {
        files.forEach(file => {
            // index += 1
            const pageNumber = file.split('-')[0]
            if (pageNumber.includes('_')) {
                const slide = pageNumber.split('_')[0]
                const subSlide = pageNumber.split('_')[1]
                index = slide
                slides[slide] = [file];
            } else {
                slides[pageNumber] = file;
            }
            
            console.log(file);
            filesNames.push(file);
            // slides[index] = file;
        })
    }
    console.log('filesNames:' + util.inspect(filesNames));
    console.log('slides:' + util.inspect(slides));
})



// fs.readFile(directory, 'utf8', function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });