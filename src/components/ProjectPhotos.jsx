import React, { PropTypes } from 'react';

export default function ProjectPhotos (props) {
    if (!props.images) return null;
    const imageElements = props.images.map((image, imageIndex) => {
        return (
            <div key={imageIndex}>
                <img src={image}/>
                <br/>
            </div>
        );
    })
    return (
        <div className="slideshow">
            {imageElements}
        </div>
    )
}
