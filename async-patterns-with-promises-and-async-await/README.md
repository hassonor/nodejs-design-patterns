### Promises

___
Promises allow us to transform the typical continuation-passing style code into a better structured and more elegant
code, such as the following:

```node
asyncOperationAsync(arg)
    .then(result => {
        // do stuff with result
    }, err => {
        // handle the error
    })
```

With *Promise* chain, the sequential execution of tasks becomes a trivial opration:

```node
asyncOperationAsync(arg)
    .then(result1 => {
        // returns another promise
        return asyncOperationAsync(arg2);
    })
    .then(result2 => {
        // returns a value
        return 'done'
    })
    .thne(undefined, err => {
        // any error in the chain is caugt here
    })
```

#### The Promise API

___

The *Promise* constructor `new Promise((resolve,reject)=>{})` creates a new *Promise* instance that fullfills or rejects
based on the behavior of the function provided as an argument. The function provided to the constructor will receive two
arguments:<br>

* *resolve(obj)*: The is a function that, when invoked, will fulfill the *Promise* with the provided fulfillment value,
  which will be obj if obj is av value.
  It will be the fulfillment value of obj if obj is a *Promise* or the thenable.
* *reject(err)*: This rejects *Promise* with the reason err. It is a convention for err to be an instance of *Error*.

#### Most important static methods of the *Promise* object

* **Promise.resolve(obj)**: This method created a new Promise from another Promise, a thenable or a value.
* **Promise.reject(err)**: This created a Promise that rejects with err as the reason.
* **Promise.all(iterable)**: This method created a Promise that fullfills with an array of fulfillment values when every
  item in the input iterable object fullfills. If any Promise in the iterable object rejects, then the Promise returned
  by Promise.all() will reject with the first rejection reason.
* **Promise.allSettled(iterable)**: This method waits for all input promises to fulfill or reject and then return an
  array of object containing the fulfillment value of the rejection reason for each input Promise.
  The difference with *Promise.all()* is that *Promise.allSettled()* will always wait for each Promise to either fulfill
  or reject, instead of immediately rejecting when one of the promises rejects.
* **Promise.race(iterable)**: This method return a Promise that is equivalent to the first Promise in iterable that
  settles.

#### Promisification

Generic function that promisifies a Node.js-style callback-based function:

```node
function promisify(callbackBasedApi) {
    return function promisified(...args) {
        return new Promise((resolve, reject) => {
            const newArgs = [
                ...args,
                function (err, result) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                }
            ]
            callbackBasedApi(...newArgs);
        })
    }
}
```



