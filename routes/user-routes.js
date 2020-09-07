const router = require("express").Router();
const passport = require("passport");
const { userController } = require("../controllers");

router.route("/user/signup").post(userController.create);

router.route("/user/add/friend").put(userController.updateFriends);

router.route("/user/find/friends").post(userController.getUserFriends);

router.route("/user/find/friend").post(userController.getUserFriend);

router.route("/user/delete/friend").delete(userController.deleteFriend);

router.post("/user/login", passport.authenticate("local"), ({ user }, res) => {
    if (user) return res.json({status: "Logged in", email: user[0].email, _id: user[0]._id});
});

router.get("/user/verify", ({user}, res) => {
    if(user) return res.json({status: "Logged in", email: user[0].email, _id: user[0]._id});
    res.json(null);
});

router.get("/user/signout", (req, res) => {
    req.logout();
    res.json(req.user);
});

module.exports = router;