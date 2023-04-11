const request = require("request");
const express = require("express");
const cors = require("cors");

const app = express();

const apiKey = "";
const accessToken = "";
const endpoint = "";

const options = {
    method: "GET",
    url: `https://${apiKey}:${accessToken}@projectvivek.myshopify.com/admin/api/2023-01/${endpoint}.json`,
    headers: {
        "Content-Type": "application/json",
    },
};

app.use(cors());

app.get("/hellothere", (req, res) => {
    console.log("req, res", req,res);

});


app.get("/", (req, res) => {
    console.log("req, res", req,res);
//     request(options, function (error, response) {
//       console.log("error ",error );
//     if (error) throw new Error(error);
//     res.send(response.body);
//       console.log("Response", response.body);
//   });
});
