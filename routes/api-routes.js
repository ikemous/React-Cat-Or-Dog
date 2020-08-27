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

router.get("/animal/information", (req, res) => {
    console.log("API REQUEST");
    axios.get("https://randomuser.me/api/", { headers: {
        'Content-Length': 0,
        'Content-Type': ['text/plain', "application/json"]
    }})
      .then(({data:information})=> {
        console.log(information);
        return res.json(information)
      })
      .catch(error => {
        console.log("timed OUt");
        console.log(error);
        return res.json(error)
      });
    // axios.get("https://randomuser.me/api/", {timeout: 10000})
    // .then(({data:information})=> {
    //     console.log(information);
    //     return res.json(information)
    // })
    // .catch(error => {
    //     console.log("timed OUt")
    //     return res.json(error)
    // });
});

module.exports = router;