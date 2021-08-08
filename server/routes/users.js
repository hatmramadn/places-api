const express = require("express");
const firebase = require("../../config");
const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
        res.json(user.user);
    } catch (error) {
        res.status(404).json(error);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

        res.json(user.user);
    } catch (error) {
        res.status(404).json(error);
    }
});
module.exports = router;
