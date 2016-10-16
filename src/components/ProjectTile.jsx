import React, { PropTypes } from 'react';

import { changeHash } from '../helpers';

export default function ProjectTile (props) {
    const styles = props.details.classes ? props.details.classes : '';
    return (
        <div className='tile-wrapper'>
            <a href={`/#${props.id}`}>
                <div className='tile' id={props.id}>
                </div>
                <div className='project-info'>
                    <div className='tagline-wrapper'>
                        <p className='tile-title'>{props.details.pretty}</p>
                        <p className='tile-tagline'>{props.details.tagline}</p>
                    </div>
                    <div className='tile-footer-wrapper'>
                        <p className='tile-date'>{`${props.details.date}`}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

ProjectTile.propTypes = {
    details: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};


