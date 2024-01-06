const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("assets"));
app.set("view engine", "ejs");
app.use("/", require("./Routes/routes"));
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server connected at ${port}`);
})