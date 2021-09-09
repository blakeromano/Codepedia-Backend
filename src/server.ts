import 'dotenv/config.js'
import mongoose from 'mongoose'
import express from 'express'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'
import {router as postsRouter} from './routes/posts'

const app: express.Application = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const db = mongoose.connection

const db_url = process.env.DATABASE_URL


mongoose.connect(`${db_url}`)


db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});

app.use('/api/posts', postsRouter)