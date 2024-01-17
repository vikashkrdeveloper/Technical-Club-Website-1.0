const express = require('express');
const port = process.env.PORT || 5000;
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
const route = require('../routes/Router');
const path = require('path')
const cors = require('cors');


app.use(cookieParser());
app.use(cors({
    origin: "*",
    credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(route);
app.get("*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})