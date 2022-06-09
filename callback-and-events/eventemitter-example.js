/*
    The following code shows us a function that uses an `EventEmitter` to notify its subscribers in real time
    when a particular regular expression is matched in a list of files:
 */

import {EventEmitter} from 'events';
import {readFile} from 'fs';

function findRegex(files, regex) {
    const emitter = new EventEmitter();
    for (const file of files) {
        readFile(file, 'utf8', (err, content) => {
            if (err) {
                return emitter.emit('error', err);
            }
            emitter.emit('fileread', file)
            const match = content.match(regex);
            if (match) {
                match.forEach(elem => emitter.emit('found', file, elem))
            }
        })
    }
    return emitter;
}

// demo of using findRegex
findRegex(['fileA.txt', 'fileB.txt'], /orhasson \w+\g)
    .on('fileread', file => console.log(`${file} was read`))
    .on('found', (file, match) => console.log(`Matched "${match}" in ${file}`))
    .on('error', err => console.log(`Error emitted ${err.message}`)));