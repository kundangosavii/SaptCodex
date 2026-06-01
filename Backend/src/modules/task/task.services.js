import { getLevelOfUser } from "./task.repository.js";

const levelService = async (userId) => {
    const result = getTasksForUser(userId);

    return result;
}