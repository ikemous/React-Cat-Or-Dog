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
    randomProfile() {
        return axios.get("/profile");
    }
};