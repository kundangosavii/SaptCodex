import User from './user.model.js';

const OnboardUser = async (userData) => {
    const { goal, level, placementDate, currentDate ,userId } = userData;

    const user = await User.findById(userId);

    if (!user) {
        return {
            success: false,
            message: 'User not found',
        };
    }

    user.onboarding = user.onboarding || {};

    user.onboarding.goal = goal;
    user.onboarding.level = level;

    if (goal === 'Placement') {
        user.onboarding.placementDate = placementDate ? new Date(placementDate) : undefined;
    }

    user.isOnborded = true;

    user.goalstartDate = new Date(currentDate);

    const goalDuration = placementDate
        ? Math.max(0, (new Date(placementDate).getFullYear() - new Date(currentDate).getFullYear()) * 12 + (new Date(placementDate).getMonth() - new Date(currentDate).getMonth()))
        : 0;

    user.goalDuration = goalDuration;

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
