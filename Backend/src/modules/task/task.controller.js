import { levelService } from "./task.services.js";
import { parseTasks } from "./task.parse.js";
import user from "../user/user.model.js";


function normalizeText(input) {
    return input.replace(/\r\n/g, '\n').trim();
}

function splitBlocks(normalized) {
    return normalized.split(/(?=Tasks:)/g);
}

function parseBlock(block) {
    const getSection = (name) => {
        const regex = new RegExp(`${name}:([\\s\\S]*?)(?=\\n[A-Z][a-z]+:|$)`);
        const match = block.match(regex);
        return match ? match[1].trim() : "";
    };

    return {
        tasks: getSection("Tasks"),
        constraints: getSection("Constraints"),
        output: getSection("Output"),
    };
}

function parseList(text) {
    return text
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.startsWith('-') || line.match(/^\d+\./))
        .map(line => line.replace(/^[-\d.\s]+/, ''));
}

function getCurrentDate(startDate) {
    if (!startDate) {
        return 1;
    }

    const now = new Date();
    const start = new Date(startDate);

    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
}


const getTasksController = async (req, res) => {
    const userId = req.user._id;

    const level = await levelService(userId);
    const currentUser = await user.findById(userId).select('goalstartDate');

    const md = await parseTasks(level);

    const currentDate = getCurrentDate(currentUser?.goalstartDate);

    const newData = md.filter(task => Number(task.day) === currentDate);


    const data = newData.flatMap(task => {
        const normalized = normalizeText(task.title);
        const blocks = splitBlocks(normalized);

        return blocks.map(block => {
            const parsed = parseBlock(block);
            return {
                tasks: parseList(parsed.tasks),
                constraints: parseList(parsed.constraints),
                output: parseList(parsed.output),
            };
        });
    });

    res.status(200).json({
        success: true,
        data: data
    });
}

export {
    getTasksController
}