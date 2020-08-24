import axios from "axios";

export default {
    randomCat(){
        axios.get("/cats/random")
        .then(cat => cat)
        .catch(error => error);
    },
};