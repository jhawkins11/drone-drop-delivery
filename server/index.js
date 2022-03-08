const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.use(bodyParser.json());

const storeMarkers = (data) => {
  try {
    fs.writeFileSync("markers.json", JSON.stringify(data), (err) => {
      if (err) {
        throw err;
      }
    });
  } catch (err) {
    console.error(err);
  }
};

const loadMarkers = () => {
  try {
    return fs.readFileSync("markers.json", "utf-8", (err, data) => {
      const markers = JSON.parse(data);
      return markers;
    });
  } catch (err) {
    console.error(err);
    return false;
  }
};

app.get("/api/markers", (req, res) => {
  const markers = JSON.parse(loadMarkers());
  res.json(markers);
});

app.post("/api/markers", (req, res) => {
  const object = {
    markers: [],
  };
  const newMarker = req.body;
  object.markers.push(req.body);
  const data = loadMarkers();
  const parsedData = JSON.parse(data);
  object.markers.push(...parsedData.markers);
  storeMarkers(object);
  res.json(newMarker);
});

app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});
