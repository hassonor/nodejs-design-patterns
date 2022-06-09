import {readFile} from 'fs';

function readJSON(filename, callback) {
    readFile(filename, 'utf8', (err, data) => {
        let parsed;
        if (err) {
            // propagate the error and exit the current function
            return callback(err);
        }
        try {
            // parse the file contents
            parsed = JSON.parse(data);
        } catch (err) {
            // catch parsing errors
            return callback(err);
        }
        // no errors, propagate just the data
        callback(null, parsed);
    })
}