const express = require("express"); //import express
const videoRouter = require("./routes/videoRoutes");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/youtube').then(() => {
        console.log("DB connected");
});

const app = express(); //making app
app.use(express.json());

app.use(videoRouter);

// app.use('/video', function (){})

// app.use('/image', (req, res) => {   //use tag catch all the others tags
//     res.send("Hello");
// })
// app.get('/video', (req, res) => {
//     res.send("Wake up to the reality");
// })
// app.post('/video', (req, res) => {
//     console.log(res.body);
//     const videos = [
//         {title: "YouTube Video 1", thumbnail: "http:mdslka/cos"},
//         {title: "YouTube Video 1", thumbnail: "http:mdslka/cos"},
//         {title: "YouTube Video 1", thumbnail: "http:mdslka/cos"},
//         {title: "YouTube Video 1", thumbnail: "http:mdslka/cos"},
//         {title: "YouTube Video 1", thumbnail: "http:mdslka/cos"},
//         {title: "YouTube Video 1", thumbnail: "http:mdslka/cos"},  
//     ];
//     res.send(videos);
// });
app.listen(3000, onServerStart);  //listening app and add part of callback function

function onServerStart() {
    console.log("Server Started");
}