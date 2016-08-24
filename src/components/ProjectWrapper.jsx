import React, { PropTypes } from 'react';

import { PROJECTS, ACTIVE_PROJECTS } from '../data/projects';

import ProjectNavigation from './ProjectNavigation';
import ProjectDetails from './ProjectDetails';
import ProjectMedia from './ProjectMedia';
import ProjectFrame from './ProjectFrame';

export default function ProjectWrapper (props) {
    const details = PROJECTS[props.page]
    return (
        <div className="modal">
            <ProjectNavigation page={props.page} />
            <ProjectDetails page={props.page} details={details} />
            <ProjectFrame iframe={details.iframe} />
            <ProjectMedia details={details} />
        </div>
    );
}

