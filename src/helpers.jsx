import { ACTIVE_PROJECTS } from './data/projects';

export const getHashLocation = () => {
    const hash = location.hash.slice(1).toLowerCase();
    const validHashes = [].concat(ACTIVE_PROJECTS, ["about"]);
    const match = validHashes.filter((compare) => compare === hash);
    console.log('match',match);
    if (match.length) {
        return match[0];
    } else {
        location.hash = '';
        return '';
    }
}

