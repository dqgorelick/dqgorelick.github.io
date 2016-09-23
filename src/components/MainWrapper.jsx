import React, { PropTypes } from 'react';

import ProjectTiles from './ProjectTiles';
import AboutWrapper from './AboutWrapper';
import SectionSelect from './SectionSelect';

export default function MainWrapper (props) {
    return (
        <div className="wrapper">
            <section className="upper">
                <h2 id="about">DANIEL GORELICK</h2>
                <div id="tagline">
                    <p>New York, NY<br/>developer / designer</p>
                </div>
            </section>
            <SectionSelect page={props.page} />
            {props.page === 'home' &&
                <ProjectTiles />
            }
            {props.page === 'about' &&
                <AboutWrapper />
            }
            <div className="copyright">&copy; daniel gorelick 2016</div>
        </div>
    );
}
