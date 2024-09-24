const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the default route for '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calendar.html')); // or addAppointment.html
});

// Serve addAppointment.html at '/add-appointment'
app.get('/add-appointment', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'addAppointment.html'));
});

// Serve calendar.html at '/calendar'
app.get('/calendar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calendar.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
