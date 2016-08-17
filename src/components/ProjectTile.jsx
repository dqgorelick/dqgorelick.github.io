import React, { PropTypes } from 'react';
import { changeHash } from '../helpers';

export default function ProjectTile (props) {
    const styles = props.details.classes ? props.details.classes : '';
    return (
        <div className={`tile ${styles}`} id={props.id}>
            <div className="filter" onClick={() => {changeHash(props.id)}}>
                <p>{props.details.pretty}</p>
            </div>
        </div>
    );
}

ProjectTile.propTypes = {
    details: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};


