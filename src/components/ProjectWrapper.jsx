import React, { PropTypes } from 'react';

import { PROJECTS, ACTIVE_PROJECTS } from '../data/projects';

import ProjectNavigation from './ProjectNavigation';
import ProjectDetails from './ProjectDetails';
import ProjectMedia from './ProjectMedia';
import ProjectDetailsHeader from './ProjectDetailsHeader';

export default function ProjectWrapper (props) {
    const details = PROJECTS[props.page];

    return (
        <div className='wrapper project-wrapper'>
            <div className='longform-wrapper'>
                <ProjectNavigation page={props.page} />
                <ProjectDetailsHeader details={details} />
                <div className='project longform'>
                    <ProjectDetails page={props.page} details={details} />
                    <ProjectMedia details={details} />
                </div>
                <ProjectNavigation page={props.page} />
            </div>
            <div className='copyright'>&copy; daniel gorelick 2016</div>
        </div>
    );
}

