import {
    OnboardUser, 
    getUser
} from './user.repository.js';


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