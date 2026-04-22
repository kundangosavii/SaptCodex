import createUser from "./auth.repository.js";
import userWithEmail from "./auth.repository.js";
import passwordvaildation from "./auth.repository.js";
import user from "./auth.repository.js";


const CreateUserService = async ({ fullname, email, password }) => {
    const user = await createUser({ fullname, email, password });
    return user;
}

const LoginService = async ({ email, password }) => {
    const userExits = await userWithEmail(email);

    if (!userExits) {
        return null;
    }

    passwordvaildation = await passwordvaildation(password);

    if (!passwordvaildation) {
        return null;
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshToken(userExits._id)

    loggedInUser = await user(userExits._id);

    return {
        loggedInUser,
        accessToken,
        refreshToken
    };
}
export default CreateUserService