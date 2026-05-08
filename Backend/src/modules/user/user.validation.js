import AppError from '../../errors/AppError.js';

const OnboardValidation = (req, res, next) => {
    const { goal, level, placementDate} = req.body;

    if (!goal || !level) {
        throw new AppError('Goal and level are required', 400);
    }

    if (typeof(goal) !== 'string') {
        throw new AppError('Goal must be a string', 400);
    }

    if (typeof(level) !== 'string') {
        throw new AppError('Level must be a string', 400);
    }

    if (goal === 'Placement' && !placementDate) {
        throw new AppError('Placement date is required for placement goal', 400);
    }

    next();
}

export {
    OnboardValidation
}