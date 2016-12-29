import React, { PropTypes } from 'react';

import ProjectFrame from './ProjectFrame';

export default function ProjectDetails(props) {
  const details = props.details;
  return (
    <div className='project-information'>
      <p>
        { details.date &&
          <span>{details.date}</span>
        }
        { details.areas &&
          <span>{details.areas}</span>
        }
        { details.budget &&
          <span>Budget: {details.budget}</span>
        }
        { details.timeline &&
          <span>Timeline: {details.timeline}</span>
        }
        { details.collaborators &&
          <span>Collaborators: {details.collaborators}</span>
        }
      </p>
      <ProjectFrame iframe={details.iframe} />
    </div>
  )
}
