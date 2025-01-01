import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'a78453b59fcf4c74863094ff95d9598f'
    }
})