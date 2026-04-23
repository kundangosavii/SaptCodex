import {CreateUserService} from "./auth.service.js";
import {LoginService} from "./auth.service.js";

const SignupController = async (req, res) => {
    const {fullname, email, password } = req.body;

    const user = await CreateUserService({ fullname, email, password });

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
        user: {
            loggedInUser: user.loggedInUser,
            accessToken: user.accessToken,
            refreshToken: user.refreshToken
        }
    });

}

export {SignupController, LoginController}