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
        .then(result => res.json(result))
        .catch(error => res.json(error));
    },
    getUserFriends({ body }, res) {
        User.findById({ _id: body._id})
        .then(result => res.json(result.matches))
        .catch(error => res.json(error));
    },
    getUserFriend({body}, res) {
        User.findById(
            {_id: body._id},
            (err, doc) => {
                if(err) return res.json(err);
                for(let i = 0; i < doc.matches.length; i++)
                    if(doc.matches[i]._id === body.animalId)
                        return res.json(doc.matches[i]);
            }
        )
    },
    deleteFriend({body}, res) {
        User.findByIdAndUpdate(
            {_id: body._id},
            {$pull: {"matches": {_id: body.animalId}}}
        )
        .then(() => res.json({"status":"Sucess"}))
        .catch(error => res.json(error));
    }
}