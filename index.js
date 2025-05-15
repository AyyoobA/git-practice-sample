import express from 'express';

const app = express();
const PORT = 3005

app.get('/', (req, res) => {
    res.send('Hello from server....')
})

app.get('/login', (req, res) => {
    res.send('Login....')
})

app.listen(PORT, (req, res) => {
    console.log(`Application is running on port ${PORT}`)
})