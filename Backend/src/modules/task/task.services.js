import { getLevelOfUser } from "./task.repository.js";

const levelService = async (userId) => {
    const result = getLevelOfUser(userId);

    return result;
}

export {
    levelService
}