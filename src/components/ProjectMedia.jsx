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
                        <div key={index} className="embed-video">
                            <div>
                                <iframe src={`${video.src}&rel=0&showinfo=0&controls=2&loop=1`} allowFullScreen></iframe>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

function ImageElements(props) {
    return (
        <div>
            { props.images &&
                props.images.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image}/>
                            <br/>
                        </div>
                    );
                })
            }
        </div>
    );
}
