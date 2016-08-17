import React, { PropTypes } from 'react';

export default function ProjectDetails (props) {
    const details = props.details;
    return (
        <div className="project-details">
            <div className="date">{`${details.date}`}</div>
            <br/>
            <div className="title">{details.title}</div>
            <div className="areas">{details.areas}</div>
            <div className="description" dangerouslySetInnerHTML={{__html: details.description}}/>
            <div className="html-link">
                <a target="_blank" href="{details.link}">{`\u2014DEMO`}</a>
            </div>
            <div className="github-link">
                <a target="_blank" href="{details.github}">{`\u2014GITHUB`}</a>
            </div>
        </div>
    )
}
// <div class="modal grid">
//     <div class="modal-header">
//         <div class="back" onclick="closeModal('');">&#10094;BACK</div>
//     </div>
//     <div class="project-details">
//         <div class="date"></div>
//         <br>

//         <div class="title"></div>
//         <div class="areas"></div>
//         <div class="description"></div>
//         <div class="html-link"></div>
//         <div class="github-link"></div>
//     </div>
//     <div class="slideshow">
//     </div>
//     <div class="browser">
//     </div>
// </div>
