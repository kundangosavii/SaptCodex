import User from "../user/user.model.js";

const createUser = async ({ fullname, email, password }) => {
    return await User.create({ fullname, email, password });
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

export { 
    createUser, 
    userWithEmail, 
    passwordvaildation, 
    getUserById,
    getUserByIdForTokenUpdate
};