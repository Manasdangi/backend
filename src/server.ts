import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;  // Dynamic port fallback to 3000 locally

// Middleware to parse JSON data
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/echo', (req: Request, res: Response) => {
  const { message } = req.body;
  res.json({ echo: message });
});

app.get('/greet/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.json({ greeting: `Hello, ${name}!` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});