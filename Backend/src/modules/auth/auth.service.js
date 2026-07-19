import {
    createUser,
    userWithEmail,
    passwordvaildation,
    getUserById,
    getUserByIdForTokenUpdate,
    getUserByRefreshToken,
    clearRefreshToken,
} from "./auth.repository.js";

import AppError from "../../errors/AppError.js";

import nodemailer from "nodemailer";
import crypto from "crypto";

const getCurrentDate = () => {
    return new Date().toISOString();
}


const CreateUserService = async ({ fullname, email, password, onboarding = {} }) => {

    const existingUser = await userWithEmail(email);

    if (existingUser) {
        throw new AppError("User with this email already exists", 400);
    }

    // config nodemailer transporter

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    console.log("transporter", transport);

    const token = crypto.randomBytes(32).toString("hex");
    const tokenExpiration = Date.now() + 3600000; // 1 hour


    const user = await createUser({ fullname, email, password, onboarding, token, tokenExpiration });

    const varificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

    try {
        await transport.sendMail({
            from: '"SaptCodex" <no-reply@SaptCodex.com>',
            to: 'gosavikundan4@gmail.com',
            subject: 'Verify Your Email Address',
            html: `<h3>Welcome to our app, ${fullname}!</h3>
                 <p>Please click the link below to verify your email address:</p>
                 <a href="${varificationLink}">${varificationLink}</a>`
        });
    } catch (mailError) {
        console.error("Nodemailer failed to send:", mailError);
        throw new AppError("Account created, but verification email failed to send.", 500);
    }


    return {
        user
    };
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
    LogoutService,
    getCurrentDate

}