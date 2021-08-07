const firebase = require("firebase").default;

const firebaseConfig = {
    apiKey: "AIzaSyBEALtv1efd9pLXRlF7t-5MW_fuU_ReTrA",
    authDomain: "places-address-2e489.firebaseapp.com",
    projectId: "places-address-2e489",
    storageBucket: "places-address-2e489.appspot.com",
    messagingSenderId: "652319757309",
    appId: "1:652319757309:web:66974fef2d4ba1addbff94",
};

const firbaseApp = firebase.initializeApp(firebaseConfig);
module.exports = firbaseApp;
