

const obj = {
    someValue: 1,
    someBoolean: true
}

const someCopyObj = {...obj};
console.log(someCopyObj)

console.log("someCopyObj === obj => ",someCopyObj === obj); // false

const y = Object.assign(someCopyObj, {});

console.log("y === someCopyObj => ",y === someCopyObj); // true
console.log("y === someCopyObj => ",y === obj); // false

const a = obj.someValue;
// a = 5; -> Error

let someObject = Object.freeze({
    a: 5,
    b: true
})

someObject.c = 5;
console.log(someObject); // c will not conclude


const someResultOfPromise = Promise.resolve('Hi!')
    .then(()=>console.log("Success"))
    .catch((err)=>err);
// Logs 'Resolved: Hi!';



