import React from 'react';
import { PROJECTS, ACTIVE_PROJECTS } from '../data/projects';

import ProjectTile from './ProjectTile';

export default function ProjectTiles (props) {
    const tiles = ACTIVE_PROJECTS.map((project, index) => {
        const details = PROJECTS[project];
        return (
            <ProjectTile index={index} key={index} details={details} id={project} />
        )
    });

    return (
        <section className='projects'>
            <div className='tiles'>
                {tiles}
            </div>
        </section>
    );
}
