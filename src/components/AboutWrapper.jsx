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
                    <p>DQGORELICK at GMAIL dot COM</p>
                    <br/>
                    <p><a target='_blank' href='http://github.com/dqgorelick'>GITHUB &#10149;</a></p>
                    <p><a target='_blank' href='http://www.linkedin.com/pub/daniel-gorelick/68/295/9a4/en'>LINKEDIN &#10149;</a></p>
                    <p><a target='_blank' href='https://twitter.com/dqgorelick'>TWITTER &#10149;</a></p>
                    <p><a target='_blank' href='./cv.pdf'>RESUME &#10149;</a></p>
                </div>
            </div>
            <div className='about-photo'>
                <img src={ABOUT.photo}/>
            </div>
        </div>
    );
}
