import express from 'express'
import cors from 'cors'
import { signUp, logIn } from './login.js'

const app = express()

app.use(cors())
app.use(express.json())

app.post("/", signUp)
app.post("/login", logIn)


app.listen(8080, () => {
    console.log('Listening on Port 8080...')
})
