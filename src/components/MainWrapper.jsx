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
        <div className="wrapper">
            <section className="upper">
                <h2 id="about">DANIEL GORELICK</h2>
                <div id="tagline">
                    <p>New York, NY<br/>developer / designer</p>
                </div>
            </section>
            <section className="contact notes">
                <p><a href="http://github.com/dqgorelick">GITHUB</a></p>
                <p><a href="./cv.pdf">RESUME</a></p>
                <p><a href="http://www.linkedin.com/pub/daniel-gorelick/68/295/9a4/en">LINKEDIN</a></p>
            </section>
            <section className="projects">
                <div className="tiles">
                    {tiles}
                </div>
            </section>
        </div>
    );
}
