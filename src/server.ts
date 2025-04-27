import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Simple GET route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Simple POST route
app.post('/echo', (req: Request, res: Response) => {
  const { message } = req.body;
  res.json({ echo: message });
});

// Simple GET route with parameters
app.get('/greet/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.json({ greeting: `Hello, ${name}!` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
