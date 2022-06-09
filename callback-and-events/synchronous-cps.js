function addCps(a, b, callback){
    callback(a,b);
}

console.log('before...');
addCps(2,2, result => console.log(`Result: ${result}`));
console.log('after...');