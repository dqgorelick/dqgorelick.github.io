import React from 'react';
import { ABOUT } from '../data/about.jsx';
export default function AboutWrapper() {
    return(
        <div className="about">
            <div className="about-bio">
                <p dangerouslySetInnerHTML={{__html: ABOUT.bio}}></p>
                <div className="contact">
                    <p>GITHUB <a href="http://github.com/dqgorelick">&#10149;</a></p>
                    <p>RESUME <a href="./cv.pdf">&#10149;</a></p>
                    <p>LINKEDIN <a href="http://www.linkedin.com/pub/daniel-gorelick/68/295/9a4/en">&#10149;</a></p>
                </div>
            </div>
            <div className="about-photo">
                <img src={ABOUT.photo}/>
            </div>
        </div>
    );
}
