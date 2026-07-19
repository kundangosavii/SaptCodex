import User from "../user/user.model.js";
import {getCurrentDate} from "../auth/auth.service.js";

const createUser = async ({ fullname, email, password, onboarding = {}, token, tokenExpiration}) => {
    const isOnborded = Boolean(onboarding && (onboarding.goal || onboarding.level || onboarding.placementDate));
    const user = await User.create({ 
        fullname, 
        email,
        password, 
        onboarding, 
        isOnborded, 
        goalstartDate: getCurrentDate(), lastActiveDate: getCurrentDate(), 
        varificationToken: token, 
        varificationTokenExpiry: tokenExpiration 
    });

    const userSended = await User.findById(user._id).select("-password -refreshToken");

    return {
        user: userSended,
    }
}

const userWithEmail = async (email) => {
    return await User.findOne({ email });
}

const passwordvaildation = async (userDoc, password) => {
    return await userDoc.comparePassword(password);
}

const getUserById = async (id) => {
    return await User.findById(id).select(" -password -refreshToken")
}      

const getUserByIdForTokenUpdate = async (id) => {
    return await User.findById(id);
}

const getUserByRefreshToken = async (refreshToken) => {
    return await User.findOne({ refreshToken });
}

const clearRefreshToken = async (userId) => {
    return await User.findByIdAndUpdate(
        userId,
        { $set: { refreshToken: null } },
        { new: true }
    );
}

export { 
    createUser, 
    userWithEmail, 
    passwordvaildation, 
    getUserById,
    getUserByIdForTokenUpdate,
    getUserByRefreshToken,
    clearRefreshToken
};