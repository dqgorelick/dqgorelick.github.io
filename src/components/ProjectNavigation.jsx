import React from 'react';
import { ACTIVE_PROJECTS } from '../data/projects';
import { changeHash } from '../helpers';

export default function ProjectNavigation (props) {
    const current = ACTIVE_PROJECTS.indexOf(props.page);
    const previous = (!!ACTIVE_PROJECTS[current-1] ? ACTIVE_PROJECTS[current-1] : ACTIVE_PROJECTS[current]);
    const next = (!!ACTIVE_PROJECTS[current+1] ? ACTIVE_PROJECTS[current+1] : ACTIVE_PROJECTS[current]);
    document.addEventListener('keyup', function onKeyUp() {
        if (event.key === 'ArrowRight') {
            document.removeEventListener('keyup', onKeyUp);
            changeHash(next);
        }
        if (event.key === 'ArrowLeft') {
            document.removeEventListener('keyup', onKeyUp);
            changeHash(previous);
        }
        if (event.key === 'Escape') {
            document.removeEventListener('keyup', onKeyUp);
            changeHash('');

        }
    });
    return (
        <div className="navigation">
            <div className="nav-btn nav-back" onClick={() => { changeHash(previous) }}>&#10094; BACK</div>
            <div className="nav-btn nav-home" onClick={() => { changeHash('') }}>INDEX</div>
            <div className="nav-btn nav-next" onClick={() => { changeHash(next) }}>NEXT &#10095;</div>
        </div>
    );
}
