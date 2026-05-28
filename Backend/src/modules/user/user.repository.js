import User from './user.model.js';

const OnboardUser = async (userData) => {
    const { goal, level, placementDate, userId } = userData;

    const user = await User.findById(userId);

    user.onboarding.goal = goal;
    user.onboarding.level = level;

    if (goal === 'Placement') {
        user.onboarding.placementDate = placementDate;
    }

    user.isOnborded = true;

    await user.save();

    return {
        success: true,
        message: 'User onboarded successfully',
    }
}

const getUser = async (userId) => {
    const user = await User.findById(userId).select('-password -refreshToken');
    if (!user) {
        return {
            success: false,
            message: 'User not found',
        }
    }
    return {
        success: true,
        data: user,
    }   
}

export {
    OnboardUser,
    getUser
}
