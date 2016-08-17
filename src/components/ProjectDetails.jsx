import React, { PropTypes } from 'react';
import ProjectLinks from './ProjectLinks';

export default function ProjectDetails (props) {
    const details = props.details;
    return (
        <div className="project-details">
            { details.title &&
                <div className="title">{details.title}</div>
            }
            { details.areas &&
                <div className="areas">{details.areas}</div>
            }
            { details.date &&
                <div className="date">{`${details.date}`}</div>
            }
            { details.description &&
                <div className="description" dangerouslySetInnerHTML={{__html: details.description}}/>
            }
            { details.technologies &&
                <div className="technologies">
                    <p className="technologies-title">Technologies</p>
                    {details.technologies.map((tech, index) => {
                            if (tech.link) {
                                return (
                                    <div key={tech.name+index}>
                                        {` \u2014 `}
                                        <a target="_blank" href={tech.link}>
                                            <span>{tech.name}</span>
                                        </a>
                                        <br/>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={tech.name+index}>
                                        {` \u2014 `}<span>{tech.name}</span>
                                        <br/>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            }
            <ProjectLinks details={details} />
        </div>
    )
}

