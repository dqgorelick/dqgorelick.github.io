import React, { PropTypes } from 'react';

export default function ProjectTechnologies(props) {
  const details = props.details;
  return (
    <div>
      { details.technologies &&
        <div className='technologies'>
          <h3>Technologies</h3>
          <ul>
            {
            details.technologies.map((tech, index) => {
              if (tech.link) {
                return (
                  <li key={tech.name+index}>
                    <p>
                      <a target='_blank' href={tech.link}>
                        {tech.name}
                      </a>
                    </p>
                    <br/>
                  </li>
                );
              } else {
                return (
                  <li key={tech.name+index}>
                    <p>{tech.name}</p>
                    <br/>
                  </li>
                );
              }
            })
            }
          </ul>
        </div>
      }
    </div>
  )
}
