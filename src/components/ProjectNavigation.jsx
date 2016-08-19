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

    document.addEventListener('keyup', function handleKeyUp() {
        console.log('props.page',props.page);
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
            <div className="nav-btn nav-back" onClick={() => { changeHash(previous) }}>&#10094; BACK</div>
            <div className="nav-btn nav-home" onClick={() => { changeHash('') }}>INDEX</div>
            <div className="nav-btn nav-next" onClick={() => { changeHash(next) }}>NEXT &#10095;</div>
        </div>
    );
}
