import {readFileSync, readFile} from 'fs';
const cache = new Map();

function consistentReadSync(filename){
    if(cache.has(filename)){
        return cache.get(filename);
    }
    else{
        const data = readFileSync(filename, 'utf8');
        cache.set(filename, data);
        return data
    }
}

// Another alternative
/*
    We can guarantee that callback is invoked asynchronously by deferring its execution using process.nextTick().
 */

function consistentReadAsync(filename, callback){
    if(cache.has(filename)){
        //deferred callback invocation
        process.nextTick(()=> callback(cache.get(filename)));
    }
    else{
        // asynchronous function
        readFile(filename, 'utf8', (err, data)=>{
            cache.set(filename, data);
            callback(data);
        })
    }
}
