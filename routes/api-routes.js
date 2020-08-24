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

router.get("/dogs/random", (req, res) => {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then(({ data: dog }) => {
        res.json(dog);
    })
    .catch(error => {
        req.json(error);
    })
});

module.exports = router;