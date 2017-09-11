import React, { PropTypes } from 'react';

import ProjectTiles from './ProjectTiles';
import AboutWrapper from './AboutWrapper';
import SectionSelect from './SectionSelect';

export default function MainWrapper(props) {
  if (props.loading) {
    return (
      <div className='wrapper'>
        <p>loading...</p>
      </div>
    )
  } else {
    return (
      <div className='wrapper'>
        <section className='upper'>
          <a href='/#home'>
            <img src="../images/logo.png" alt="main logo"/>
            <h2>DANIEL GORELICK</h2>
          </a>
          <div className='tagline'>
            <p>Developer | Technologist | Engineer</p>
          </div>
        </section>
        <SectionSelect page={props.page} />
        {props.page === 'home' &&
          <ProjectTiles />
        }
        {props.page === 'about' &&
          <AboutWrapper />
        }
        <div className='copyright'>&copy; daniel gorelick 2017</div>
      </div>
    );
  }
}
