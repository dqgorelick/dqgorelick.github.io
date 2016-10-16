import React, { PropTypes } from 'react';

import ProjectTiles from './ProjectTiles';
import AboutWrapper from './AboutWrapper';
import SectionSelect from './SectionSelect';

export default function MainWrapper (props) {
    return (
        <div className='wrapper'>
            <section className='upper'>
                <a href='/#home'>
                    <h2>DANIEL GORELICK</h2>
                    <div className='tagline'>
                        <p>Digital &amp; Hardware Creative Technologist<br/>New York, NY</p>
                    </div>
                </a>
            </section>
            <SectionSelect page={props.page} />
            {props.page === 'home' &&
                <ProjectTiles />
            }
            {props.page === 'about' &&
                <AboutWrapper />
            }
            <div className='copyright'>&copy; daniel gorelick 2016</div>
        </div>
    );
}
