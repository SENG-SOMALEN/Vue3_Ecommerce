import { getData } from "./BaseApi";

export const product_Data = async () => {
    try{
        return await getData("products");
    }
    catch(error) {
        console.log("Prodcuts api error: ", error);
        throw error;
    }
}