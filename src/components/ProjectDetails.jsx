import React, { PropTypes } from 'react';

import ProjectFrame from './ProjectFrame';

export default function ProjectDetails (props) {
    const details = props.details;
    return (
        <div>
            <ul className='project-information'>
                { details.areas &&
                    <li className='areas'>
                        <p>
                            <span>Areas: </span>{details.areas}
                        </p>
                    </li>
                }
                { details.date &&
                    <li className='date'>
                        <p>
                            <span>Date: </span>{`${details.date}`}
                        </p>
                    </li>
                }
                { details.budget &&
                    <li className='budget'>
                        <p>
                            <span>Budget: </span>{`${details.budget}`}
                        </p>
                    </li>
                }
                { details.timeline &&
                    <li className='timeline'>
                        <p>
                            <span>Timeline: </span>{`${details.timeline}`}
                        </p>
                    </li>
                }
                { details.collaborators &&
                    <li className='collaborators '>
                        <p>
                            <span>Collaborators : </span>{`${details.collaborators }`}
                        </p>
                    </li>
                }
            </ul>
            { details.description &&
                <p className='description' dangerouslySetInnerHTML={{__html: details.description}}/>
            }
            { details.technologies &&
                <div className='technologies'>
                    <h3>Technologies</h3>
                    <ul>
                        {details.technologies.map((tech, index) => {
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
            <ProjectFrame iframe={details.iframe} />
        </div>
    )
}

