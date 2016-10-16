import React, {PropTypes} from 'react';

export default function ProjectLinks (props) {
    if (props.details.link || props.details.github) {
        return (
            <div className='links'>
                <h3 className='technologies-title'>Additional</h3>
                <ul>
                    {props.details.link &&
                        <li>
                            <p>
                                <a target='_blank' href={props.details.link}>Demo</a>
                            </p>
                        </li>
                    }
                    {props.details.github &&
                        <li>
                            <p>
                                <a target='_blank' href={props.details.github}>Github</a>
                            </p>
                        </li>
                    }
                </ul>
            </div>
        );
    } else {
        return null;
    }

}
