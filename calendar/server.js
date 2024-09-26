const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calendar.html')); 
});


app.get('/add-appointment', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'addAppointment.html'));
});


app.get('/calendar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calendar.html'));
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
