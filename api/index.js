// api/index.js
const express = require("express");
const serverless = require("serverless-http")
; // npm i express serverless-http
const cors = require("cors");


const app = express();
const PORT =  3000;
app.use(express.json());
app.use(cors()); // allow all origins by default

// sample route
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Serverless Express 🚀" });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// If you need more routes, just keep adding to `app`
module.exports = app;         // local dev
module.exports.handler = serverless(app); // serverless entry‑point
