const express = require('express')
const app = express()

app.use("/", (req, res) => {
    res.send("Server is running");
});

app.listen(5000, console.log('SERVER IS LISTENING PORT 3010'));
