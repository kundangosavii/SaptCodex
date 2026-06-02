import User from '../user/user.model.js';

const getLevelOfUser = async (userId) => {
    const user = await User.findById(userId).select('onboarding.level').lean();

    if (!user) {
        throw new Error('User not found');
    }

    return user.onboarding?.level;
}

export {
    getLevelOfUser
}