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
        console.log(body);
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
}