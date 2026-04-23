import { createUser } from "./auth.repository.js";
import { userWithEmail } from "./auth.repository.js";
import {passwordvaildation} from "./auth.repository.js";
import {getUserById} from "./auth.repository.js";
import {getUserByIdForTokenUpdate} from "./auth.repository.js";
import {getUserByRefreshToken} from "./auth.repository.js";
import {clearRefreshToken} from "./auth.repository.js";
import AppError from "../../errors/AppError.js";


const CreateUserService = async ({ fullname, email, password }) => {
    const user = await createUser({ fullname, email, password });
    return user;
}

const generateAccessAndRefereshToken = async (userId) => {
    try {
        const user = await getUserByIdForTokenUpdate(userId);
        if (!user) {
            throw new AppError("User not found", 404);
        }
        
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;

        await user.save();
        return { accessToken, refreshToken };

    } catch (error) {
        throw new AppError(error.message || "Error generating tokens", 500);
    }
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

    const loggedInUser = await getUserById(userExits._id);

    return {
        loggedInUser,
        accessToken,
        refreshToken
    };
}

const LogoutService = async ({ refreshToken }) => {
    if (!refreshToken) {
        return null;
    }

    const user = await getUserByRefreshToken(refreshToken);

    if (!user) {
        return null;
    }

    await clearRefreshToken(user._id);

    return true;
}

export {
    CreateUserService,
    LoginService,
    LogoutService
}