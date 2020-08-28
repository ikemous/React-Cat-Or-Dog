const router = require("express").Router();
const axios = require("axios");

router.get("/joke", (req, res) => {
    axios.get("https://icanhazdadjoke.com/slack")
    .then(joke => {
        console.log(joke.data.attachments[0].text);
        res.json(joke.data.attachments[0].text);
    })
    .catch(error => {
        res.json(error);
    });
})

router.get("/profile", (req, res) => {
    let profileInformation = {};
    const randomNumber = Math.floor(Math.random() * 2);
    let initialQuery;
    randomNumber===1? initialQuery="https://api.thecatapi.com/v1/images/search":initialQuery="https://dog.ceo/api/breeds/image/random";
    axios.get(initialQuery)
    .then(({ data }) => {
        let image;
        randomNumber===1?image=data[0].url:image=data.message;
        profileInformation = {
            imageUrl: image,
        };
        axios.get("https://randomuser.me/api/", { headers: {
            'Content-Length': 0,
            'Content-Type': ['text/plain', "application/json"]
        }})
          .then(({data:information})=> {
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
            axios.get("https://icanhazdadjoke.com/slack")
            .then(joke => {
                profileInformation = {
                    ...profileInformation,
                    bio: joke.data.attachments[0].text
                };
                res.json(profileInformation);
            })
            .catch(error => {
                res.json(error);
            });
          })
          .catch(error => res.json(error));
    })
    .catch( error => res.json(error));
});

module.exports = router;