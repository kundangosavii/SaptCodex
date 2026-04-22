import { createUser } from "./auth.repository.js";
import { userWithEmail } from "./auth.repository.js";
import {passwordvaildation} from "./auth.repository.js";
import {getUserById} from "./auth.repository.js";


const CreateUserService = async ({ fullname, email, password }) => {
    const user = await createUser({ fullname, email, password });
    return user;
}

const LoginService = async ({ email, password }) => {
    const userExits = await userWithEmail(email);

    if (!userExits) {
        return null;
    }

    const isPasswordValid = await passwordvaildation(userExits, password);

    if (!isPasswordValid) {
        return null;
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshToken(userExits._id)

    loggedInUser = await getUserById(userExits._id);

    return {
        loggedInUser,
        accessToken,
        refreshToken
    };
}
export {
    CreateUserService,
    LoginService
}