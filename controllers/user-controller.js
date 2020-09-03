const { User } = require("../models");

module.exports = {
    create({ body }, res) {
        User.create(body)
        .then(() => {
            res.redirect(307, "/user/login")
        })
        .catch((error) => {
            res.status(401).json(error);
        });
    },
    updateFriends({body}, res) {
        User.findByIdAndUpdate(
            { _id: body._id},
            {$push: { matches: body.animal }}
        )
        .then(result => {
            console.log(result);
            console.log("updated");
            res.json(result)
        })
        .catch(error => {
            console.log(error);
            console.log("notUpdated");
            res.json(error)
        });
    },
    getUserFriends({ body }, res) {
        User.findById({ _id: body._id})
        .then(result => res.json(result.matches))
        .catch(error => res.json(error));
    },
}