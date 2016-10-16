import React, { PropTypes } from 'react';

export default function ProjectDetails (props) {
    const details = props.details;
    return (
        <div className='longform-header'>
            { details.title &&
                <h1 className='title'>{details.title}</h1>
            }
            { details.tagline &&
                <p className='tagline'>{details.tagline}</p>
            }
            { details.banner &&
                <img className='banner' src={details.banner}/>
            }
        </div>
    )
}
