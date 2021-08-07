const express = require("express");
const cors = require("cors");

const userRoutes = require("./server/routes/users");
const placesRoutes = require("./server/routes/places");

const app = express();
app.use(express.json());
app.use(cors());

// Users Router
app.use("/users", userRoutes);
app.use("/places", placesRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Places APi",
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app started on ${PORT}`));
