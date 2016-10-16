import React, { PropTypes } from 'react';

import ProjectLinks from './ProjectLinks';
import ProjectFrame from './ProjectFrame';

export default function ProjectDetails (props) {
    const details = props.details;
    return (
        <div>
            { details.areas &&
                <p className='areas'>{details.areas}</p>
            }
            { details.date &&
                <p className='date'>{`${details.date}`}</p>
            }
            { details.description &&
                <p className='description' dangerouslySetInnerHTML={{__html: details.description}}/>
            }
            <ProjectFrame iframe={details.iframe} />
            { details.technologies &&
                <div className='technologies'>
                    <h3>Technologies</h3>
                    <ul>
                        {details.technologies.map((tech, index) => {
                                if (tech.link) {
                                    return (
                                        <li key={tech.name+index}>
                                            <a target='_blank' href={tech.link}>
                                                <p>{tech.name}</p>
                                            </a>
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
            <ProjectLinks details={details} />
        </div>
    )
}

