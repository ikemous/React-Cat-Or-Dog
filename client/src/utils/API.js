import axios from "axios";

export default {
    randomCat(){
        return axios.get("/cats/random");
    },
};