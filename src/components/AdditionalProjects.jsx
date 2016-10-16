import React from 'react';
import { PROJECTS, ACTIVE_PROJECTS } from '../data/projects';
import { getRandom } from '../helpers';

import ProjectTile from './ProjectTile';

export default function AdditionalProjects(props) {
    const tiles = ACTIVE_PROJECTS.filter((project) => project !== props.page).map((project, index) => {
        const details = PROJECTS[project];
        return (
            <ProjectTile index={index} key={index} details={details} id={project} />
        )
    });
    const subset = getRandom(tiles, 3);

    return (
        <div className='tiles additional'>
            {subset}
        </div>
    )
}
