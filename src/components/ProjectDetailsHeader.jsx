import React, { PropTypes } from 'react';

export default function ProjectDetails (props) {
    const details = props.details;
    return (
        <div className='longform-header'>
            <div className='longform-wrapper'>
                <div className='longform-header'>
                    { details.title &&
                        <h1 className='title'>{details.title}</h1>
                    }
                    { details.tagline &&
                        <p className='tagline'>{details.tagline}</p>
                    }
                </div>
            </div>
            { details.banner &&
                <img className={`banner ${details.banner_portrait ? 'portrait' : ''}`} src={details.banner}/>
            }
        </div>
    )
}