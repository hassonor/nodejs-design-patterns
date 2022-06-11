import {randomBytes} from 'crypto';

const randomByteP = promisify(randomBytes)
randomByteP(32)
    .then(buffer => {
        console.log(`Random bytes: ${buffer.toString()}`);
    })


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


