const express = require("express");
const app = express();
const fs = require('fs')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT
app.use(cors(
    {
            origin: ["https://deploy-boothlist-frontend.vercel.app"],
            methods: ["POST", "GET"],
            credentials: true
          }
));
app.use(express.json());

// LIST = []

// try{
//     LIST = JSON.parse(fs.readFileSync("156Booth.json", "utf8"));
// } catch{
//     LIST = []
// }

const voterSchema = new mongoose.Schema({
    Booth: Number,
    PN: Number,
    VoterID : String,
    Name : String,
    Father_Husband : String,
    sex : String,
    Age : Number,
  });
  const voterList = mongoose.model('VoterList', voterSchema);

  mongoose.connect(process.env.MONGO_URL, {dbName: "voterList" });

  app.get("/",(req,res) => {
    res.send("voterList");
  })
  app.post("/booths/ID", async (req, res) => {
    const id = String(req.query.id);
    // console.log('Received request for ID:', id);

    try {
        const person = await voterList.findOne({ VoterID: id });
        //console.log('Retrieved person:', person);

        if (person) {
            res.json(person);
        } else {
            res.status(404).send("Person not found.");
        }
    } catch (error) {
        console.error('Error retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/booths/NAME", async(req, res) => {
    const name = String(req.query.name)
    try {
        const person = await voterList.findOne({ Name: name });
        //console.log('Retrieved person:', person);

        if (person) {
            res.json(person);
        } else {
            res.status(404).send("Person not found.");
        }
    } catch (error) {
        console.error('Error retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/booths/FH_NAME", async(req, res) => {
    const name = String(req.query.name)
    try {
        const person = await voterList.find({ Father_Husband : name });
       // console.log('Retrieved person:', person);

        if (person) {
            res.json(person);
        } else {
            res.status(404).send("Person not found.");
        }
    } catch (error) {
        console.error('Error retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/booths/AGE", async(req, res) => {
    const age = Number(req.query.age)
    const person = await VoterList.find({age})
    if(person){
        res.json(person)
    }else{
        res.send("not present").status(404)
    }
});