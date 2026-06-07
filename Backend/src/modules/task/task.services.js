import { getLevelOfUser } from "./task.repository.js";
import user from "../user/user.model.js";


const levelService = async (userId) => {
    const result = await getLevelOfUser(userId);

    return result;
}

export {
    levelService,
}