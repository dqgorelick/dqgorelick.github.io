import React, { PropTypes } from 'react';

import { PROJECTS, ACTIVE_PROJECTS } from '../data/projects';

import ProjectNavigation from './ProjectNavigation';
import ProjectDetails from './ProjectDetails';
import ProjectTechnologies from './ProjectTechnologies';
import ProjectMedia from './ProjectMedia';
import ProjectFrame from './ProjectFrame';
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
          { details.description &&
            <p className='description' dangerouslySetInnerHTML={{__html: details.description}}/>
          }
          <ProjectFrame iframe={details.iframe} />
          <ProjectMedia details={details} />
          <ProjectTechnologies page={props.page} details={details} />
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
      <div className='copyright'>dan gorelick 2018</div>
    </div>
  );
}
