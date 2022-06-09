import {EventEmitter} from 'events';
import {readFile} from 'fs';

class FindRegex extends EventEmitter {
    constructor(regex) {
        super();
        this.regex = regex;
        this.files = [];
    }

    addFile(file) {
        this.files.push(file);
        return this;
    }

    find() {
        for (const file of this.files) {
            readFile(file, 'utf8', (err, content) => {
                if (err) {
                    return this.emit('error', err);
                }
                this.emit('fileread', file);

                const match = content.match(this.regex)
                if (match) {
                    match.forEach(elem => this.emit('found', file, elem));
                }
            });
            return this
        }
    }
}

// using the new FindRegex
const findRegexInstance = new FindRegex(/orhasson \w+/);
findRegexInstance
    .addFile('fileA.txt')
    .addFile('file-json.json')
    .find()
    .on('found', (file, match) => console.log(`Matched "${match}" in file ${file}`))
    .on('error', err => console.error(`Error emitted ${err.message}`));

/*
    The FindRegex class extends the EventEmitter to become a fully observable class.
    Always use super() in constructor to initialize the EventEmitter internals.
 */