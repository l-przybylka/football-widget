import axios from "axios";
const url = "https://frontend-tech-test-ashy.vercel.app/api/match"

const getAllData = async () => {
    const request = await axios.get(url)
    return request.then(res => res.data)
}