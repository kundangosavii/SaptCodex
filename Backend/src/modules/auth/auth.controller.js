import CreateUserService from "./auth.service.js";

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

export {SignupController}