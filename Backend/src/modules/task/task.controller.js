import { levelService } from "./task.service.js";
import parseTasks from "./task.parse.js";


const getTasksController = async (req, res) => {
    const userId = req.user._id;

    const level = await levelService(userId);

    const md = await parseTasks(level);

    res.status(200).json({
        success: true,
        data: md
    });
}

export {
    getTasksController                                        
}