const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");

const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.static(path.join(__dirname, "/views")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});
app.get("/download", (req, res) => {
  const url = req.query.video_url;
  console.log(url);
  ytdl(url).pipe(fs.createWriteStream("video.mp4"));
});

app.listen("3000", () => {
  console.log("connected to port 3000");
});
