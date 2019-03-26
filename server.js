const express = require("express");
//initialized express app
const app = express();
//calling express function with ()
const bodyParser = require("body-parser");

var cors = require('cors')

app.use(cors());

app.use(bodyParser.json());
app.use("/", express.static("public"));

// app.get("/", (req, res)=>{
//     res.render("./public/index.html")
// });

app.get("/api", (req, res)=>{
    res.send("this is a response from homebase");
})

app.post("/api", (req, res)=>{
    res.send(req.body);
})

const port = process.env.PORT
const ip = process.env.IP

app.listen(port, ip, function(){
    console.log(`App listending on Port: ${port}`);
    console.log(`App listending on IP: ${ip}`)
});