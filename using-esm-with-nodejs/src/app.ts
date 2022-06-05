import express, { Request, Response } from 'express'
import MyLogger, {log,info} from './logger';

log("Hello From log message :)");
info("Hello From info message :)");

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