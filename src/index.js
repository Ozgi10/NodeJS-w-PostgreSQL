import express from 'express';
import dotenv from 'dotenv';
import studentsRoutes from './src/students/routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
});

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.use('/api/students', studentsRoutes);