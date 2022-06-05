/*
In ESM, some important CommonJS references are not defined.
console.log(exports) // ReferenceError: exports is not defined;
console.log(module) // ReferenceError: module is not defined;
console.log(__filename) // ReferenceError: __filename is not defined;
console.log(__dirname) // ReferenceError: __dirname is not defined;

SEE THE ALTERNATIVES BELLOW
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
 IMPORT JSON FILES DIRECTLY AS MODULE IN ESM

 import { createRequire } from 'module';
 const require = createRequire(import.meta.url);
 const data = require('./data.json');
 console.log(data);
 */




