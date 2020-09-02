import axios from "axios";

export default {
    createUser(userInfo) {
        return axios.post("/user/signup", userInfo);
    },
    randomCat()
    {
        return axios.get("/cats/random");
    },
    randomDog() 
    {
        return axios.get("/dogs/random");
    },
    randomInformation()
    {
        return axios.get("/animal/information");
    },
    randomProfile() {
        return axios.get("/profile");
    }
};