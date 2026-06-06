import { getLevelOfUser } from "./task.repository.js";
import user from "../user/user.model.js";

function getCurrentDate() {
    const now = new Date();
    const start = new Date(user.goalstartDate);

    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}


const levelService = async (userId) => {
    const result = await getLevelOfUser(userId);

    return result;
}

export {
    levelService
}