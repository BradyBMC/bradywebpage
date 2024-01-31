const express = require('express')
const app = express()

app.use("/", (rec, res) => {
    res.send("Server is running")
});

app.listen(3010, console.log('SERVER IS LISTENING PORT 3010'));
