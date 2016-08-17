import React, {PropTypes} from 'react';

export default function ProjectLinks (props) {
    if (props.details.link && props.details.github) {
        return (
            <div className="links">
                <a className="link-half" target="_blank" href={props.details.link}>DEMO</a>
                <a className="link-half" target="_blank" href={props.details.github}>GITHUB</a>
            </div>
        );
    } else if (props.details.link) {
        return (
            <div className="links">
                <a className="link-whole" target="_blank" href={props.details.link}>DEMO</a>
            </div>
        );
    } else if (props.details.github) {
        return (<div className="links">
                    <a className="link-whole" target="_blank" href={props.details.github}>GITHUB</a>
                </div>
        );
    } else {
        return null;
    }

}
