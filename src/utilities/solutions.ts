import { readdirSync } from 'fs';

export function getSolutions(dir) {
    const solutions = readdirSync(dir);
    return solutions.map(solution => {
        return {
            date: solution.replace(/.html/g, ''),
            link: 'solutions/' + solution
        };
    });
}