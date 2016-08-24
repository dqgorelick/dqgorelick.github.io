import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import { changeHash } from '../helpers';
export default function ProjectTile (props) {
    const styles = props.details.classes ? props.details.classes : '';
    const TileGroup = CSSTransitionGroup;
    return (
        <TileGroup
            component="div"
            className="tile"
            id={props.id}
            transitionName="tile-transition"
            transitionEnterTimeout={1750}
            transitionLeaveTimeout={1750}
            transitionAppear={true}
            transitionAppearTimeout={1750}
        >
            <div className="filter" onClick={() => {changeHash(props.id)}}>
                <p className="tile-title">{props.details.pretty}</p>
                <p className="tile-date">{`${props.details.date}`}</p>
                <hr/>
                <p className="tile-tagline">{props.details.tagline}</p>
            </div>
        </TileGroup>
    );
}

ProjectTile.propTypes = {
    details: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};


