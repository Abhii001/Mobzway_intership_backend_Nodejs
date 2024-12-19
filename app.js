import express from "express";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Handle GET request to the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Handle GET request to the about page
app.get('/about', (req, res) => {
  res.send('This is the About Page!');
});

// Handle POST request to /data
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data });
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Start the server
const PORT = 5100;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
