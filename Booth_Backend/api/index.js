const express = require("express");
const app = express();
const fs = require('fs')
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');

console.log("MONGO_URL:", process.env.MONGO_URL);
const PORT = process.env.PORT
const URL = process.env.URL
console.log(URL);
app.use(cors(
    {
            origin: [URL],
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
    SN: Number,
    PN: Number,
    VoterID : String,
    Name : String,
    Father_Husband : String,
    sex : String,
    Age : Number,
  });
  const voterList = mongoose.model('VoterList', voterSchema);

  mongoose.connect(process.env.MONGO_URL, {dbName: "voterList" });

  app.get("/", (req, res) => res.send("Express on Vercel"));
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
        console.error('Error in retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/booths/NAME", async(req, res) => {
    const name = String(req.query.name)
    try {
        const person = await voterList.find({ Name: name });
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

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});