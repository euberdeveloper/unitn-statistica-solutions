import { join } from 'path';
import { readdirSync } from 'fs';

export function getSolutions() {
    const solutions = readdirSync(join(__dirname, 'public', 'solutions'));
    return solutions.map(solution => {
        return {
            date: solution.replace(/.html/g, ''),
            link: 'solutions/' + solution
        };
    });
}