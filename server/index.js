const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const markers = [
  { lat: -8.85304, lng: 108.63077 },
  { lat: 48.02798, lng: -27.32373 },
  { lat: 20.91212, lng: 62.34446 },
];

app.get('/api/markers', (req, res) => {
  res.json(markers);
});

app.post('/api/markers', (req, res) => {
  const marker = { ...req.body };
  markers.push(marker);

  res.json(marker);
});

app.listen(9001, () => {
  console.log('Node server started on port 9001.');
});
