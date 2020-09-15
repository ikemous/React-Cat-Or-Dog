const router = require("express").Router();
const axios = require("axios");

router.get("/profile", (req, res) => {
    let profileInformation = {};
    const randomNumber = Math.floor(Math.random() * 2);
    let initialQuery;
    randomNumber===1? initialQuery="https://api.thecatapi.com/v1/images/search":initialQuery="https://dog.ceo/api/breeds/image/random";
    axios.get(initialQuery,{
        timeout: 3000
    })
    .then(({ data }) => {
        let image;
        randomNumber===1?image=data[0].url:image=data.message;
        profileInformation = {
            imageUrl: image,
        };
        axios.get("https://randomuser.me/api/", {  
            headers: {
                'Content-Length': 0,
                'Content-Type': ['text/plain', "application/json"],
            },
            timeout: 3000
        })
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
            axios.get("https://icanhazdadjoke.com/slack", {
                timeout: 3000
            })
            .then(joke => {
                profileInformation = {
                    ...profileInformation,
                    bio: joke.data.attachments[0].text
                };
                res.json(profileInformation);
            })
            .catch(error => {
                res.redirect("/profile");
                // res.json(error);
            });
          })
          .catch(error => res.redirect("/profile"));
    })
    .catch( error => res.redirect("/profile"));
});

module.exports = router;