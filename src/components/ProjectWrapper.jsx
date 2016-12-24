import React, { PropTypes } from 'react';

import { PROJECTS, ACTIVE_PROJECTS } from '../data/projects';

import ProjectNavigation from './ProjectNavigation';
import ProjectDetails from './ProjectDetails';
import ProjectMedia from './ProjectMedia';
import ProjectLinks from './ProjectLinks';
import ProjectDetailsHeader from './ProjectDetailsHeader';
import AdditionalProjects from './AdditionalProjects';

export default function ProjectWrapper(props) {
  const details = PROJECTS[props.page];

  return (
    <div className='wrapper project-wrapper'>
      <ProjectNavigation page={props.page} />
      <ProjectDetailsHeader details={details} />
      <div className='longform-wrapper'>
        <div className='project longform'>
          <ProjectDetails page={props.page} details={details} />
          { !!details.images &&
            <h3>Results</h3>
          }
          <ProjectMedia details={details} />
        </div>
      </div>
      <div className='longform-wrapper'>
        <div className='project longform'>
          <ProjectLinks details={details} />
        </div>
      </div>
      <div className='additional-projects'>
        <h3>Additional Projects</h3>
        <div className='additional-tiles'>
          <AdditionalProjects page={props.page} />
        </div>
      </div>
      <div className='copyright'>&copy; daniel gorelick 2016</div>
    </div>
  );
}
