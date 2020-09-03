const router = require("express").Router();
const passport = require("passport");
const { userController } = require("../controllers");

router.route("/user/signup").post(userController.create);

router.route("/user/add/friend").put(userController.updateFriends);

router.post("/user/login", passport.authenticate("local"), ({ user }, res) => {
    if (user) return res.json({status: "Logged in", email: user[0].email, _id: user[0]._id});
});

router.get("/user/verify", ({user}, res) => {
    console.log(user);
    if(user) return res.json({status: "Logged in", email: user[0].email, _id: user[0]._id, matches: user[0].matches});
    res.json(null);
});

router.get("/user/signout", (req, res) => {
    req.logout();
    res.json(req.user);
});

module.exports = router;