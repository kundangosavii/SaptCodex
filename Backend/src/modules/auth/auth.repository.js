import User from "../user/user.model.js";

const createUser = async ({ fullname, email, password }) => {
    const user = await User.create({ fullname, email, password });
    return user;
}

export default createUser;