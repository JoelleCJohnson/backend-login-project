import { connectDb, disconnect } from './src/connectDb.js'


export async function signUp(req, res) {
    const body = req.body
    const { email, password } = body
    const client = await connectDb()

    const oneUser = await client.query(`SELECT * FROM users 
    WHERE (id = '${email}' AND password = '${password}');`)

    console.log(oneUser)

    if(oneUser.length === 0) {
        await client.query(`INSERT INTO users (id, password)
                            VALUES ('${email}', '${password}')`)
        res.status(204).send(oneUser)
    } else {
        res.send({ message: "User already exists"})
    }
        disconnect(client)
}

export async function logIn(req, res) {
    const { email, password } = req.body
    const client = await connectDb()
    const user = await client.query(`SELECT * FROM users 
    WHERE (id = '${email}' AND password = '${password}');`)
    disconnect(client)
    res.status(200).send({ message: "Logged in" })
}

export async function getAllUsers(req, res) {
    const client = await connectDb()
    const allUsers = await client.query(`SELECT * FROM users;`)
    console.log(allUsers)
    disconnect(client)
    res.send(allUsers)
}