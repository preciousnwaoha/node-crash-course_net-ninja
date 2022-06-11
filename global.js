// console.log(global);

setTimeout(() => {
    console.log("In timeout");
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log("In interval");
}, 1000);

console.log(__dirname);
console.log(__filename);

