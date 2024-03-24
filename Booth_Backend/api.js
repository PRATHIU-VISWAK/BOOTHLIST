const express = require("express");
const app = express();
const fs = require('fs')
const cors = require('cors');


app.use(cors());
app.use(express.json());

LIST = []

try{
    LIST = JSON.parse(fs.readFileSync("156Booth.json", "utf8"));
} catch{
    LIST = []
}

app.post("/booths/ID", (req, res) => {
    const id = req.query.id
    const person = LIST.find((a) => a.VoterID === id)
    if(person){
        res.json(person)
    }else{
        res.send("not present").status(404)
    }
});

app.post("/booths/NAME", (req, res) => {
    const name = req.query.name
    const person = LIST.find((a) => a.Name === name)
    if(person){
        res.json(person)
    }else{
        res.send("not present").status(404)
    }
});

app.post("/booths/AGE", (req, res) => {
    const age = Number(req.query.age)
    const person = LIST.filter((a) => a.Age === age)
    if(person){
        res.json(person)
    }else{
        res.send("not present").status(404)
    }
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
  