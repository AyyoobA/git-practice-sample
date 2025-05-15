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

app.get('/status', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.post('/koko-payment', express.json(), (req, res) => {
    const { amount, currency, userId } = req.body;
    if (!amount || !currency || !userId) {
        return res.status(400).json({ error: 'amount, currency, and userId are required' });
    }
    // Simulate payment processing
    res.status(200).json({
        message: 'Payment processed successfully',
        payment: {
            amount,
            currency,
            userId,
            status: 'success',
            transactionId: Math.random().toString(36).substr(2, 9)
        }
    });
});

app.get('/status', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.post('/koko-payment', express.json(), (req, res) => {
    const { amount, currency, userId } = req.body;
    if (!amount || !currency || !userId) {
        return res.status(400).json({ error: 'amount, currency, and userId are required' });
    }
    // Simulate payment processing
    res.status(200).json({
        message: 'Payment processed successfully',
        payment: {
            amount,
            currency,
            userId,
            status: 'success',
            transactionId: Math.random().toString(36).substr(2, 9)
        }
    })});

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ random: randomNumber });
});

app.listen(PORT, () => {console.log(`Application is running on port ${PORT}`)} )