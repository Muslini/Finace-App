require('dotenv').config();
const express = require("express");
const https = require("node:https");
const path = require("path");
const PORT = 10000 || 3030;

const app = express();
app.use(express.static(path.resolve(__dirname, "./FinancesApp/build")));
const URL = process.env.CONNECT;

app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, "./FinancesApp/build/index.html"))
});

app.get("/api", function(req, res) {

    https.get(URL, function(response) {
        response.on("data", (data) => {
            const stockData = JSON.parse(data);
            res.send(stockData);
        })
    }).on("error", (error) => {
        res.send({});
        console.log(error);
    })
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });