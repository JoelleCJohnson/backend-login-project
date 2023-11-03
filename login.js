import { connectDb, disconnect } from './src/connectDb.js'

export async function signUp (req, res){
    const body = req.body
    const { email, password } = body
    const client = await connectDb()
    const result = await client.query(`INSERT INTO users (id, password)
    VALUES ('${email}', '${password}')`)
    disconnect(client)

    res.status(201).send({message: 'sent'})
}

export async function logIn(req, res){
    const {email, password} = req.body
    const client = await connectDb()
    const user = await client.query(`SELECT * FROM users 
    WHERE (id = '${email}' AND password = '${password}');`) 
    disconnect(client)
    res.status(200).send('Logged in')
}