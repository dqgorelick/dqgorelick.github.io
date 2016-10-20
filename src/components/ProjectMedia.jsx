import React, { PropTypes } from 'react';

export default function ProjectMedia (props) {
    return (
        <div className={'slideshow ' + (!!props.details.iframe ? 'has-iframe' : '')}>
            <VideoElements videos={props.details.videos} />
            <ImageElements images={props.details.images} />
        </div>
    )
}

function VideoElements(props) {
    return (
        <div>
            { props.videos &&
                props.videos.map((video, index) => {
                    return (
                        <div key={index}>
                            <div className='embed-video'>
                                <div>
                                    <iframe id='myVideo' src={`${video.src}&rel=0&showinfo=0&controls=2&loop=1`} allowFullScreen ></iframe>
                                </div>
                            </div>
                            <p className='media-caption'>{video.caption}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

function ImageElements(props) {
    console.log('props.images',props.images);
    return (
        <div>
            { props.images &&
                props.images.map((image, index) => {
                    console.log('image',image);
                    return (
                        <div className={`project-image ${image.portrait ? 'portrait' : ''}`} key={index}>
                            <img src={image.src}/>
                            <p className='media-caption'>{image.caption}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}
