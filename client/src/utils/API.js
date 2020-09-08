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
        return axios.post("/user/find/friends", userId);
    },
    getFriend(information) {
        return axios.post("/user/find/friend", information);
    },
    deleteFriend(information) {
        return axios.delete("/user/delete/friend", {
            params: information
        });
    },
    logoutUser() {
        return axios.get("/user/signout");
    },
    randomProfile() {
        return axios.get("/profile");
    }
};