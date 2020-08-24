const router = require("express").Router();
const axios = require("axios");

router.get("/cats/random", (req, res) => {
    axios.get("https://api.thecatapi.com/v1/images/search")
    .then(({ data }) => {
        res.json(data[0]);
    })
    .catch( error => {
        res.json(error);
    });
});

module.exports = router;