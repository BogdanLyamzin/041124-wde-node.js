import axios from "axios";

const weatherInstance = axios.create({
    baseURL: "https://api.weatherstack.com",
    params: {
        access_key: process.env.WEATHERSTACK_API_KEY
    }
})

export const getCurrentWeather = async(query)=> {
    const {data} = await weatherInstance.get("/current", {
        params: {
            query
        }
    });

    return data;
}