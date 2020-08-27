const router = require("express").Router();
const axios = require("axios");

router.get("/profile", (req, res) => {
    let profileInformation = {};
    const randomNumber = Math.floor(Math.random() * 2);
    let initialQuery;
    randomNumber===1? initialQuery="https://api.thecatapi.com/v1/images/search":initialQuery="https://dog.ceo/api/breeds/image/random";
    axios.get(initialQuery)
    .then(({ data }) => {
        console.log(data);
        let image;
        console.log(randomNumber);
        randomNumber===1?image=data[0].url:image=data.message;
        profileInformation = {
            imageUrl: image,
        };
        axios.get("https://randomuser.me/api/", { headers: {
            'Content-Length': 0,
            'Content-Type': ['text/plain', "application/json"]
        }})
          .then(({data:information})=> {
            console.log(information.results[0].dob);
            profileInformation = {
                ...profileInformation,
                age: information.results[0].dob.age,
                gender: information.results[0].gender,
                city: information.results[0].location.city,
                country: information.results[0].location.country,
                title: information.results[0].name.title,
                first: information.results[0].name.first,
                last: information.results[0].name.last,
                profileSeed: information.info.seed,
            };
            console.log(profileInformation);
            res.json(profileInformation);
          })
          .catch(error => {
            console.log(error);
            res.json(error)
          });
    })
    .catch( error => {
        console.log(error);
        res.json(error);
    });
});

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
        return res.json({})
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