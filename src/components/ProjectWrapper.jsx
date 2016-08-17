import React, { PropTypes } from 'react';

import ProjectTile from './ProjectTile';
import { PROJECTS, ACTIVE_PROJECTS } from '../data/projects';

export default function ProjectWrapper (props) {
    const details = PROJECTS[props.page]
    return (
        <div className="tiles">
            <ProjectTile details={details} id={props.page} />
        </div>
    );
}

ProjectWrapper.propTypes = {
    page: PropTypes.object.isRequired
};
