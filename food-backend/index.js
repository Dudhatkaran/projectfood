const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
require('./Db/Connection')

app.use('/public', express.static('public'));

app.listen(1234, () => {
    console.log("Sever Start...");
});

app.use('/api', require('./api/BlogAPI'));

app.use('/', (req, res) => {
    return res.send("<h1 align='center'>Blog Backend</h1>");
})