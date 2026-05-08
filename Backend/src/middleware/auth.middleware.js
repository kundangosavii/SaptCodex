import jwt from 'jsonwebtoken';
import AppError from '../errors/AppError.js';

const verifyJWT = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw new AppError('Authorization token is missing', 401);
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { _id: decoded.id, email: decoded.email };
        
        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token',
            });
        }
        res.status(401).json({
            success: false,
            message: error.message || 'Authentication failed',
        });
    }
};

export { verifyJWT };