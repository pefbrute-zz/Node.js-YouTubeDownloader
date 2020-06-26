const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

app.use('/static', express.static('./static'));

app.listen(3000, () => { 
  console.log("It Works!");
});

app.get("/", (request, response) => { 
  response.sendFile("index.html", { root: "./" });
});

app.get('/download', (request, response) => {
  let query = request.query;
  var url = query.url;    
  response.header("Content-Disposition", 'attachment;\  filename="Video.mp4');    
  ytdl(url, {format: 'mp4'}).pipe(response);
});