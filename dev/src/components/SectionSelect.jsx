import React from 'react';

import { changeHash } from '../helpers';

export default function SectionSelect(props) {
    return(
        <div className='sections'>
            <div className={`section ${(props.page === 'home' ? 'active' : '')}`}>
                <a href="/#gallery">
                    <p>GALLERY</p>
                </a>
            </div>
            <div className={`section ${(props.page === 'about' ? 'active' : '')}`}>
                <a href='/#about'>
                    <p>ABOUT</p>
                </a>
            </div>
        </div>
    );
}
