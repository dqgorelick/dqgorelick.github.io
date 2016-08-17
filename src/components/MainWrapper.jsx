import React, { PropTypes } from 'react';

import { PROJECTS, ACTIVE_PROJECTS } from '../data/projects';
import ProjectTile from './ProjectTile';

export default function MainWrapper () {
    const tiles = ACTIVE_PROJECTS.map((project, index) => {
        const details = PROJECTS[project];
        return (
            <ProjectTile key={index} details={details} id={project} />
        )
    });

    return (
        <div className="tiles">
            {tiles}
        </div>
    );
}
