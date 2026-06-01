const getLevelOfUser = (userId) => {
    const user= User.findById(userId).select('onboarding.level').lean();
    if(!user) {
        throw new Error('User not found');
    }

    return user;
}