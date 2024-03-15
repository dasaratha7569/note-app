const express = require('express');
const {connectToDB} = require('./src/config/admin');
const app = express();
const {router} = require('./src/routers/admin');
const path = require('path');
connectToDB();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(router);
app.listen(3000, () => {
    console.log("Server is running.");
});
