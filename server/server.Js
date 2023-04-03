const express = require("express")
const mongoose = require('mongoose')
const url = "mongodb://localhost:8000/iutexplorer"
const port = 8000;
const app = express();

mongoose.connect(url, {})
    .then(result => console.log("database connected"))
    .catch(err => console.log(err))

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:5178");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Content-Security-Policy", "default-src 'none'; font-src http://localhost:8000;");
//     next();
// });

app.get('/', (reg, res) => {
    res.send("<h1>Hello from nodejs app</hi>")
});

app.listen(port, () => {
    console.log("server is running at port " + port)
})
