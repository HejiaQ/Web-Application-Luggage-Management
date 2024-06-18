//import express
const express = require("express");
// //initialization
const app = express();

const {Client} = require("pg");


// app.get("/api", (req, res) => {
//     res.json({"Test" : ["hi", "hello"]})
// });

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Woshi1tiaoyu@",
    database: "MyDB_Test"
});

client.connect();

client.query("SELECT * FROM job_applied", (err, res) => {
    if(!err) {
        console.log(res.rows);
    } else{
        console.log(err);
    }
    client.end;
})


//port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});