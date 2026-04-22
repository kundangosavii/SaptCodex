import User from "../user/user.model.js";

const createUser = async ({ fullname, email, password }) => {
    const user = await User.create({ fullname, email, password });
    return user;
}

const userWithEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
}

const passwordvaildation = async (password) => {
    return await user.comparePassword(password);
}

const user = async (id) => {
    loggedInUser = await User.findById(id).select(" -password -refreshToken")
}      

export { 
    createUser, 
    userWithEmail, 
    passwordvaildation, 
    user
};