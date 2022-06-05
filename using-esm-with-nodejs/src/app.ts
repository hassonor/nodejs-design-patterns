import express, { Request, Response } from 'express'
import MyLogger, {log,info} from './logger';

log("Hello From log message :)");
info("Hello From info message :)");

/*
Async import example:
const SUPPORTED_LANGUAGES = ['el','en','es','it','pl']
const selectedLanguage = process.argv[2];

if(!SUPPORTED_LANGUAGES.includes(selectedLanguage)){
    console.log('The specified language is not supported');
    process.exit(1);
}
const translationModule = `./strings-${selectedLanguage}.ts`
import (translationModule)
    .then ((strings)=> {
        console.log(strings.HELLO)
    })
 */

const logger = new MyLogger("DEFAULT");
logger.log("Hello from Or Hasson");

const app = express()
const PORT = process.env.PORT ||5000


app.get('/', (req: Request, res: Response) => {
    res.json({ greeting: 'Hello world!' })
})

app.listen(PORT, () => {
    console.log(`🚀 server started at http://localhost:${PORT}`)
})