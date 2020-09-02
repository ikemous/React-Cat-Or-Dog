const { User } = require("../models");
const { userController } = require(".");

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
}