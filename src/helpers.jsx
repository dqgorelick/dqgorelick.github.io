import { ACTIVE_PROJECTS } from './data/projects';

export const getHashLocation = () => {
    const currentHash = location.hash.slice(1);
    const match = validateHash(currentHash);
    if (match.length) {
        return match[0];
    } else {
        location.hash = '';
        return '';
    }
}

export const validateHash = (hash) => {
    hash = hash.toLowerCase();
    const validHashes = [].concat(ACTIVE_PROJECTS, ["about"]);
    const match = validHashes.filter((compare) => compare === hash);
    return match;
}

export const changeHash = (newHash) => {
    const match = validateHash(newHash);
    if (match.length) {
        location.hash = match[0];
    } else {
        location.hash = '';
    }
}
