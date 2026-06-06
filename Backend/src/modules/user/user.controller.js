import {
    OnboardService,
    getUserService
} from './user.service.js';


const OnboardController = async (req, res) => {
    const { goal, level, placementDate } = req.body;
    const userId = req.user._id;

    const data = { goal, level, placementDate, userId};

    const result = await OnboardService(data);

    if(!result.success) {
        return res.status(400).json({
            success: false,
            message: 'Internal server error',
        });
    }

    res.status(200).json({
        result
    });
}

const getUserController = async (req, res) => {
    const userId = req.user._id;
    const result = await getUserService(userId);
    if(!result.success) {
        return res.status(400).json({
            success: false,
            message: 'Internal server error',
        });
    }

    res.status(200).json({
        result
    });
}

export {
    OnboardController,
    getUserController
}