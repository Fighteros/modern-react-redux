import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID N3daQwhSq-dSSBeQ104BYy4Njsz8op04ihSoStWxf5w'
    }
})
