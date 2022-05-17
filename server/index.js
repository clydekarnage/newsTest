const express = require('express')
const app = express()

const db = require("./models")

// Routers
const usersRouter = require("./routes/Users");
app.use(express.json()),
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Server running on PORT 3000")
    });    
})
