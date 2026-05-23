
import { getData } from "./BaseApi";

export const users_data = async () => {
    try {
        return await getData("users");
    }
    catch(error) {
        console.log("User api error: ", error);
        throw error
    }
};

