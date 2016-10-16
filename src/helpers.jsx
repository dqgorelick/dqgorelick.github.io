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

export const getRandom = (projects, count) => {
    const selected = []
    if (projects.length < count) {
        return null;
    }
    while(selected.length < count){
        const randomNumber=Math.floor(Math.random()*projects.length)
        let found = false;
        for(let i=0; i<selected.length; i++) {
            if (selected[i]==randomNumber) {
                found = true;
                break;
            }
        }
        if (!found) {
            selected[selected.length] = randomNumber;
        }
    }
    const subset = [];
    selected.forEach(num => {
        subset.push(projects[num])
    })
    return subset;
}
