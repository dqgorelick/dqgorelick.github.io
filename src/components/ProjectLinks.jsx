import React, {PropTypes} from 'react';

export default function ProjectLinks (props) {
    if (props.details.link || props.details.github) {
        return (
            <div className='links'>
                <h3 className='technologies-title'>Additional</h3>
                <ul>
                    {props.details.link &&
                        <li>
                            <a target='_blank' href={props.details.link}><p>Demo</p></a>
                        </li>
                    }
                    {props.details.github &&
                        <li>
                            <a target='_blank' href={props.details.github}><p>Github</p></a>
                        </li>
                    }
                </ul>
            </div>
        );
    } else {
        return null;
    }

}
