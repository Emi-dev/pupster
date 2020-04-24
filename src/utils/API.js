import axios from "axios";


export default {
    search: function(props) {
        return axios.get(`https://dog.ceo/api/breed/${props.breed}/images`);
    }
};