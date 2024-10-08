import React from 'react';
import { ABOUT } from '../data/about.jsx';
export default function AboutWrapper() {
    return(
        <div className='about-wrapper'>
            <div className='about-bio'>
                <div className='about-photo-mobile'>
                    <img src={ABOUT.photo}/>
                </div>
                <p dangerouslySetInnerHTML={{__html: ABOUT.bio}}></p>
                <div className='contact'>
                    <p>DQGORELICK at GMAIL</p>
                    <br/>
                    <p><a target='_blank' href='http://github.com/dqgorelick'>GITHUB &#10149;</a></p>
                    <p><a target='_blank' href='https://www.linkedin.com/in/dqgorelick/'>LINKEDIN &#10149;</a></p>
                    <p><a target='_blank' href='https://twitter.com/dqgorelick'>TWITTER &#10149;</a></p>
                    <p><a target='_blank' href='https://www.instagram.com/dqgorelick/'>INSTAGRAM &#10149;</a></p>
                </div>
            </div>
            <div className='about-photo'>
                <img src={ABOUT.photo}/>
            </div>
        </div>
    );
}
