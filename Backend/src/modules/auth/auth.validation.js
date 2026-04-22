import AppError from "../../errors/AppError.js";

const SignupValidation = async(req, res, next) => {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
        throw new AppError('All fields are required', 400);
    }

    if (typeof(fullname) !== 'string') {
        throw new AppError('Fullname must be a string', 400);
    }

    if (typeof(email) !== 'string') {
        throw new AppError('Email must be a string', 400);
    }

    if (typeof(password) !== 'string') {
        throw new AppError('Password must be a string', 400);
    }

    if (password.length < 6) {
        throw new AppError('Password must be at least 6 characters long', 400);
    }

    if (!email.includes('@')) {
        throw new AppError('Email must be a valid email address', 400);
    }
    
    next();
}



export { SignupValidation }