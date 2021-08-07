const express = require("express");
const firebase = require("firebase/app").default;
const cors = require("cors");

const config = require("./config.js");
const userRoutes = require("./server/routes/users.js");

const app = express();
app.use(express.json());
app.use(cors());

// Initialize firbase app
firebase.initializeApp(config.firebaseConfig);

// Users Router
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Places APi",
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app started on ${PORT}`));
