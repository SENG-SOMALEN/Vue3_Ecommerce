import { getData } from "./BaseApi";

export const categories_data = async () => {
    try{
        return await getData("categories");
    }
    catch(error) {
        console.log("Categorise api error: ", error);
        throw error;
    }
}