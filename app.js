const express = require('express');
const trainerRouter = require("./controllers/TrainerRouter")
const packageRouter = require("./controllers/PackageRouter")
const memberRouter = require("./controllers/MemberRouter")
const adminRouter = require("./controllers/AdminRouter")

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/trainer', trainerRouter)

app.use("/api/package", packageRouter)

app.use("/api/member", memberRouter)

app.use("/api/admin", adminRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
