import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import { changeHash } from '../helpers';
export default function ProjectTile (props) {
    const styles = props.details.classes ? props.details.classes : '';
    const ReactCSSTransitionGroup = CSSTransitionGroup;
    return (
        <ReactCSSTransitionGroup
            component="div"
            className={`tile ${styles}`}
            id={props.id}
            transitionName="tile-transition"
            transitionEnterTimeout={1750}
            transitionLeaveTimeout={1750}
            transitionAppear={true}
            transitionAppearTimeout={1750}
        >
            <div className="filter" onClick={() => {changeHash(props.id)}}>
                <p>{props.details.pretty}</p>
            </div>
        </ReactCSSTransitionGroup>
    );
}

ProjectTile.propTypes = {
    details: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};


