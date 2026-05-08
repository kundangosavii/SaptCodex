import {
    OnboardUser
} from './user.repository.js';


const OnboardService = async (data) => {
    const { goal, level, placementDate, userId } = data;

    const result = await OnboardUser({ goal, level, placementDate, userId });
    return result;
}

export {
    OnboardService,
}