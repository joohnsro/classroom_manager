import express from "express";
const router = require('./router');

const app = express();
const port = 3000;

app.use(express.json())
app.use(router);

app.listen(port, () => console.log(`API listen on port ${port}`))