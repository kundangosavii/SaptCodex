import { 
    CreateUserService, 
    LoginService, 
    LogoutService
} from "./auth.service.js";

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
        message: 'User created successfully',
        user: {
            fullname: user.fullname,
            email: user.email,
        }
    });
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

export {SignupController, LoginController, LogoutController};