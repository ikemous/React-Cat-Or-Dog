const router = require("express").Router();
const passport = require("passport");
const { userController } = require("../controllers");

router.route("/user/signup").post(userController.create);

router.post("/user/login", passport.authenticate("local"), ({ user }, res) => {
    if (user) return res.json({status: "Logged in", email: user[0].email, _id: user[0]._id});
});

module.exports = router;