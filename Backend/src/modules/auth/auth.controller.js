import { 
    CreateUserService, 
    LoginService, 
    LogoutService
} from "./auth.service.js";

import User from "../user/user.model.js";

const parseCookies = (cookieHeader = "") => {
    return cookieHeader.split(';').reduce((cookies, cookie) => {
        const [rawKey, ...rawValue] = cookie.trim().split('=');
        if (!rawKey) {
            return cookies;
        }

        cookies[rawKey] = decodeURIComponent(rawValue.join('='));
        return cookies;
    }, {});
}

const SignupController = async (req, res) => {
    const { fullname, email, password, goal, level, placementDate } = req.body;

    const onboarding = {
        goal: goal || undefined,
        level: level || undefined,
        placementDate: placementDate || undefined,
    };

    const user = await CreateUserService({ fullname, email, password, onboarding });

    return res.status(201).json({
        message: 'Signup successful! Please check your email to verify your account.',
    });
}

const verifyEmailController = async (req, res) => {
    try {
    const { token } = req.query;

    // Find user with matching token that hasn't expired
    const user = await User.findOne({
      varificationToken: token,
      varificationTokenExpiry: { $gt: Date.now() }
    });


    if (!user) {
      return res.status(400).json({ message: "Invalid or expired verification token." });
    }

    user.isVerified = true;
    user.verificationToken = undefined; 
    user.verificationTokenExpires = undefined; 
    await user.save();

    res.status(200).json({ message: "Email verified successfully! You can now log in." });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

const LoginController = async (req, res) => {
    const { email, password } = req.body;

    const user = await LoginService({ email, password });

    if (!user) {
        return res.status(401).json({
            message: 'Invalid email or password'
        });
    }

    const options = {
        httpOnly: true,
        secure: true
    }


    return res
    .status(200)
    .cookie('accessToken', user.accessToken, options )
    .cookie('refreshToken', user.refreshToken, options )
    .json({
        message: 'Login successful',
        token: user.accessToken,
        user: {
            loggedInUser: user.loggedInUser,
            accessToken: user.accessToken,
            refreshToken: user.refreshToken
        }
    });

}

const LogoutController = async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    const refreshToken = cookies.refreshToken || req.body.refreshToken;

    await LogoutService({ refreshToken });

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
        .status(200)
        .clearCookie('accessToken', options)
        .clearCookie('refreshToken', options)
        .json({
            message: 'Logout successful'
        });
}

export {SignupController, LoginController, LogoutController, verifyEmailController};