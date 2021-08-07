const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Places APi",
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app started on ${PORT}`));
