import express, { Request, Response } from 'express'
import {func} from "./test";

const app = express()
const PORT = process.env.PORT ||5000

console.log(func());
app.get('/', (req: Request, res: Response) => {
    res.json({ greeting: 'Hello world!' })
})

app.listen(PORT, () => {
    console.log(`🚀 server started at http://localhost:${PORT}`)
})