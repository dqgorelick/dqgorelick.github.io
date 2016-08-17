import React, { PropTypes } from 'react';

export default function ProjectPhotos (props) {
    console.log('props',props);
    if (!props.details.images) return null;
    const imageElements = props.details.images.map((image, imageIndex) => {
        return (
            <div key={imageIndex}>
                <img src={image}/>
                <br/>
            </div>
        );
    })
    return (
        <div className={'slideshow ' + (!!props.details.iframe ? 'has-iframe' : '')}>
            {imageElements}
        </div>
    )
}
