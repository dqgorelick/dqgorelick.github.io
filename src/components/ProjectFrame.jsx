import React, { PropTypes } from 'react';

export default function ProjectFrame (props) {
    if (!props.iframe) return null;
    return (
        <div className="browser">
            <iframe src={props.iframe} width='100%' height='600px'>
                <p>Your browser does not support iframes.</p>
            </iframe>
        </div>
    )
}
