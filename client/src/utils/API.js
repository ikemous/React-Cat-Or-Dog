import axios from "axios";

export default {
    randomCat()
    {
        return axios.get("/cats/random");
    },
    randomDog() 
    {
        return axios.get("dogs/random");
    },
};