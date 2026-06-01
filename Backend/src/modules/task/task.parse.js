import fs from 'fs';
import path from 'path';

const levelFileMap = {
    beginner: 'module-1.md',
    intermediate: 'module-2.md',
    advanced: 'module-3.md',
};

export function parseTasks(level) {
    const fileName = levelFileMap[level.toLowerCase()];
    if (!fileName) {
        throw new Error(`Invalid level: ${level}`);
    }

    const mdPath = path.join(__dirname, fileName);
    const md = fs.readFileSync(mdPath, 'utf8');

    const blocks = md.split("## TASK").slice(1);

    return blocks.map(block => {
        const [meta, content] = block.split("---");
        const data = {};

        meta.trim().split("\n").forEach(line => {
            const [key, value] = line.split(":").map(s => s.trim());
            data[key] = value;
        });

        data.title = content.trim();
        return data;
    });
}
