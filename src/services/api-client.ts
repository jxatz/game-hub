import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '719ebc64c3aa49fb9715f0727e40c809'
        
    }
})
