const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
var dbContext = require("./dbcontext");

const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connect(
    "mongodb://mongo:r1F0h7DP61XemamxZJ3N@containers-us-west-175.railway.app:6443",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
