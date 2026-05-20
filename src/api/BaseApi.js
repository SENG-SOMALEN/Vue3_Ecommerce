import axios from "axios";

// Base URL api
const baseURL = "https://api.escuelajs.co/api/v1/";

// function fetch (axios)

export const getData = async (endpoint) => {
    try{

        const response = await axios.get(baseURL + endpoint);

        console.log(response.data);
        
        return response.data;
    }
    catch(error){

        console.log("API Error: ", error);
        throw error;
    }
};
