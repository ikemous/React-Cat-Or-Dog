const { User } = require("../models");
const { userController } = require(".");

module.exports = {
    create({ body }, res) {
        const newAccount = new User(body);
        newAccount.hashPassword();
        User.create(newAccount)
        .then(() => {
            res.redirect(307, "/user/login")
        })
        .catch((error) => {
            res.status(401).json(error);
        });
    },
}