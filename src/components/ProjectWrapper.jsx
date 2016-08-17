import React, { PropTypes } from 'react';

import ProjectDetails from './ProjectDetails';
import ProjectPhotos from './ProjectPhotos';
import ProjectFrame from './ProjectFrame';

import { PROJECTS, ACTIVE_PROJECTS } from '../data/projects';
import { changeHash } from '../helpers';

export default function ProjectWrapper (props) {
    const details = PROJECTS[props.page]
    return (
        <div className="modal">
            <div className="modal-header">
                <div className="back" onClick={() => { changeHash('') }}>&#10094;BACK</div>
            </div>
            <ProjectDetails details={details} />
            <ProjectPhotos images={details.images} />
            <ProjectFrame iframe={details.iframe} />
        </div>
    );
}

