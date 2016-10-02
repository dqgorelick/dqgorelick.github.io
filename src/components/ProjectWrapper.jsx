import React, { PropTypes } from 'react';

import { PROJECTS, ACTIVE_PROJECTS } from '../data/projects';

import ProjectNavigation from './ProjectNavigation';
import ProjectDetails from './ProjectDetails';
import ProjectMedia from './ProjectMedia';
import ProjectFrame from './ProjectFrame';

import LongformWrapper from './longform/LongformWrapper';

export default function ProjectWrapper (props) {
    const details = PROJECTS[props.page];
    console.log('PROJECTS[props.page]',PROJECTS[props.page]);

    if (PROJECTS[props.page].longform) {
        return (
            <LongformWrapper page={props.page} />
        );
    } else {
        return (
            <div className="modal">
                <ProjectNavigation page={props.page} />
                <ProjectDetails page={props.page} details={details} />
                <ProjectFrame iframe={details.iframe} />
                <ProjectMedia details={details} />
            </div>
        );
    }
}

