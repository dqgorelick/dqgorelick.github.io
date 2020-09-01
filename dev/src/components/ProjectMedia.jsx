import React, { PropTypes } from 'react';
import ImageComponent from './ImageComponent';

export default function ProjectMedia(props) {
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
                  <iframe
                    id='myVideo'
                    src={
                      `${video.src}${video.type === 'vimeo' ?
                        '?byline=0&title=0&portrait=0&badge=0&color=23BDEF'
                        :
                        '&rel=0&showinfo=0&controls=2&loop=1&color=white'
                      }`
                    }
                    allowFullScreen
                  />
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
  return (
    <div>
      { props.images &&
        props.images.map((image, index) => {
          return (
            <div className={`project-image ${image.portrait ? 'portrait' : ''}${image.smaller ? 'smaller' : ''}`} key={index}>
              <a target='_blank' href={image.src}>
                <ImageComponent src={image.src}/>
              </a>
              <p className='media-caption'>{image.caption}</p>
            </div>
          );
        })
      }
    </div>
  );
}
