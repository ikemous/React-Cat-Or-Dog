import axios from "axios";

export default {
    createUser(userInfo) {
        return axios.post("/user/signup", userInfo);
    },
    loginUser(userInfo) {
        return axios.post("/user/login", userInfo);
    },
    verifyUser() {
        return axios.get("/user/verify");
    },
    addFriend(information) {
        return axios.put("/user/add/friend", information);
    },
    getFriends(userId) {
        console.log(userId);
        return axios.post("/user/find/friends", userId);
    },
    logoutUser() {
        return axios.get("/user/signout");
    },
    randomProfile() {
        return axios.get("/profile");
    }
};