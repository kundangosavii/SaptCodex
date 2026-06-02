import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const levelFileMap = {
    beginner: 'module-1.md',
    intermediate: 'module-2.md',
    advanced: 'module-3.md',
};

export function parseMarkdownFile(mdPath) {
    const md = fs.readFileSync(mdPath, 'utf8');
    const blocks = md.split(/^##\s+TASK\s*$/gmi).slice(1);

    return blocks.flatMap(block => {
        const [meta, content] = block.split('---');
        if (!meta || !content) {
            return [];
        }

        const data = {};

        meta.trim().split('\n').forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (!key || valueParts.length === 0) {
                return;
            }

            const value = valueParts.join(':').trim().replace(/,+$/, '');
            data[key.trim()] = value;
        });

        data.title = content.trim();
        return [data];
    });
}

export function parseTasks(level) {
    const normalizedLevel = typeof level === 'string'
        ? level.toLowerCase()
        : level?.level?.toLowerCase?.();

    if (!levelFileMap[normalizedLevel]) {
        throw new Error(`Invalid level: ${level}`);
    }

    const contentRoot = path.join(__dirname, 'content');
    const trackFolders = fs.readdirSync(contentRoot, { withFileTypes: true })
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);

    const tasks = trackFolders.flatMap(track => {
        const trackPath = path.join(contentRoot, track);
        const files = fs.readdirSync(trackPath).filter(file => file.endsWith('.md'));

        return files.flatMap(file => parseMarkdownFile(path.join(trackPath, file)));
    });

    return tasks;
}
