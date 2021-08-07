const express = require("express");
const firbase = require("../../config");
const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
        res.json(user);
    } catch (error) {
        res.json(error);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
        res.json(user);
    } catch (error) {
        res.json(error);
    }
});
module.exports = router;
