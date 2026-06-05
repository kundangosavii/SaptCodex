import {
    OnboardUser, 
    getUser
} from './user.repository.js';

function getCurrentDate() {
    return new Date().toISOString().split('T')[0];
}

const OnboardService = async (data) => {
    const { goal, level, placementDate, userId } = data;

    const result = await OnboardUser({ goal, level, placementDate, userId });
    return result;
}

const getUserService = async (userId) => {
    const result = await getUser(userId);
    return result;
}


export {
    OnboardService,
    getUserService
}