import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
import todosRouter from './routes/todos.js';

const app = express();
const PORT = process.env.PORT || 3000;

// connect to MongoDB
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/todos', todosRouter);

// health
app.get('/', (req, res) => res.json({ status: 'ok', name: 'Todo API', version: '1.0.0' }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
