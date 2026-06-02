import { getLevelOfUser } from "./task.repository.js";

const levelService = async (userId) => {
    const result = await getLevelOfUser(userId);

    return result;
}

export {
    levelService
}