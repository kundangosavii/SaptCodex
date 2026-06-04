import { levelService } from "./task.services.js";
import { parseTasks } from "./task.parse.js";


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

function getcurrentDate() {
    return new Date().toISOString().split("T")[0];
}


const getTasksController = async (req, res) => {
    const userId = req.user._id;

    const level = await levelService(userId);

    const md = await parseTasks(level);

    const data = md.flatMap(task => {
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