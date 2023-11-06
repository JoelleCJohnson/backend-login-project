import express from 'express'
import cors from 'cors'
import { signUp, logIn, getAllUsers } from './login.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", getAllUsers)
app.post("/", signUp)
app.post("/", logIn)


app.listen(8080, () => {
    console.log('Listening on Port 8080...')
})
