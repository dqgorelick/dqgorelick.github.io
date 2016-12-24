import React, { PropTypes } from 'react';
import ImageComponent from './ImageComponent';

export default function ProjectDetails (props) {
    var imageLoaded = function(evt) {
        console.log(evt);
    }

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
                <div>
                    <ImageComponent
                        className={`banner ${details.banner_portrait ? 'portrait' : ''}`}
                        src={details.banner.src}
                    />
                    <p className='media-caption'>{details.banner.caption}</p>
                </div>

            }
        </div>
    )
}
