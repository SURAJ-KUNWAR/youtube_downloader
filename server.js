const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");

const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.static(path.join(__dirname, "/views")));

app.get("https://ytdownloadapp.herokuapp.com//", (req, res) => {
  res.sendFile(__dirname + "index.html");
});
app.get("https://ytdownloadapp.herokuapp.com//download", (req, res) => {
  const url = req.query.video_url;
  console.log(url);
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(url, {
    format: "mp4",
  }).pipe(res);
});

app.listen("3000", () => {
  console.log("connected to port 3000");
});
