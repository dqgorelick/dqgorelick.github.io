import React from 'react';

import { changeHash } from '../helpers';

export default function SectionSelect(props) {
    return(
        <div className="sections">
            <div className={`section ${(props.page === 'home' ? 'active' : '')}`}>
                <p onClick={() => {changeHash('')}}>GALLERY</p>
            </div>
            <div className={`section ${(props.page === 'about' ? 'active' : '')}`}>
                <p onClick={() => {changeHash('about')}}>ABOUT</p>
            </div>
            <div className={`section ${(props.page === 'blog' ? 'active' : '')}`}>
                <a href="./blog">
                    <p>BLOG</p>
                </a>
            </div>
        </div>
    );
}
