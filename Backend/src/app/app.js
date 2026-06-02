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

import authRoutes from '../modules/auth/auth.routes.js';
import userRoutes from '../modules/user/user.routes.js';
import taskRoutes from '../modules/task/task.routes.js';

app.use('/api/v1/auth', authRoutes);

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/task', taskRoutes);


export default app;