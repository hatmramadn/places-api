const express = require("express");
const db = require("../../config").firestore();
const router = express.Router();

// GELL ALL PLACES
router.get("/", async (req, res) => {
    try {
        const places = await (await db.collection("places").get()).docs;
        const mappPlaces = places.map((place) => {
            return {
                id: place.id,
                ...place.data(),
            };
        });
        res.send(mappPlaces);
    } catch (error) {
        res.status(404).json(error);
    }
});

// ADD PLACE
router.post("/", async (req, res) => {
    const { placeType, placeName, placePhone, placeLocation } = req.body;
    try {
        await db.collection("places").add({
            placeType,
            placeName,
            placePhone,
            placeLocation,
        });
        res.json({
            message: "Added Successfully",
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

// UPDATE PLACE
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { placeName, placeType, placePhone, placeLocation } = req.body;
    try {
        db.collection("places").doc(id).update({
            placeType,
            placeName,
            placePhone,
            placeLocation,
        });

        res.json({
            message: "Updated Successfully",
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
