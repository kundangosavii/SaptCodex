import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

app.use(express.static('public'));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ limit: '16kb', extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

import authRoutes from './modules/auth/auth.routes.js';

app.use('/api/v1/auth', authRoutes);

export default app;