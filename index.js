import express from 'express';

const app = express();
const PORT = 3005

app.get('/', (req, res) => {
    res.send('Hello from server....')
})

app.post('/login', express.json(), (req, res) => {
    const { username, password } = req.body;
    // Simple authentication logic (for demonstration)
    if (username === 'admin' && password === 'password') {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.post('/register', express.json(), (req, res) => {
    const { username, password } = req.body;
    // Simple registration logic (for demonstration)
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }
    
    res.status(201).send('Registration successful');
});

app.post('/payment', express.json(), (req, res) => {
    const { amount, method } = req.body;
    if (!amount || !method) {
        return res.status(400).send('Amount and payment method are required');
    }
    // Simulate payment processing
    res.status(200).send(`Payment of $${amount} via ${method} processed successfully`);
});

app.listen(PORT, (req, res) => {
    console.log(`Application is running on port ${PORT}`)
})