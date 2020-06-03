import React from 'react';
import { ACTIVE_PROJECTS } from '../data/projects';
import { changeHash } from '../helpers';

export default function ProjectNavigation (props) {
    const current = ACTIVE_PROJECTS.indexOf(props.page);
    const previous = (!!ACTIVE_PROJECTS[current-1] ? ACTIVE_PROJECTS[current-1] : ACTIVE_PROJECTS[current]);
    const next = (!!ACTIVE_PROJECTS[current+1] ? ACTIVE_PROJECTS[current+1] : ACTIVE_PROJECTS[current]);
    const options = {
        previous,
        next,
    };

    document.addEventListener('keyup', function handleKeyUp (event) {
        switch(event.key) {
            case ('ArrowRight'):
                changeHash(options.next);
                if (props.page !== options.next) {
                    document.removeEventListener('keyup', handleKeyUp);
                }
                break;
            case ('ArrowLeft'):
                changeHash(options.previous);
                if (props.page !== options.previous) {
                    document.removeEventListener('keyup', handleKeyUp);
                }
                break;
            case ('Escape'):
                changeHash('');
                document.removeEventListener('keyup', handleKeyUp);
                break;
        }
    });

    return (
        <div className="navigation">
            <a href={`/#${previous}`}>
                <div className={`nav-btn nav-back ${options.previous === props.page ? 'inactive' : ''}`}>&#10094; BACK</div>
            </a>
            <a href={`/#gallery`}>
                <div className={`nav-btn nav-home`}>GALLERY</div>
            </a>
            <a href={`/#${next}`}>
                <div className={`nav-btn nav-next ${options.next === props.page ? 'inactive' : ''}`}> NEXT &#10095;</div>
            </a>
        </div>
    );
}
