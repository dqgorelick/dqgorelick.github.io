import React, {Component} from 'react';

class ImageComponent extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      loaded: false,
      src: props.src
    };
  }
  
  onImageLoad() {
    if (this.isMounted()) {
      this.setState({ loaded: true });
    }
  }

  loadImage() {
    if (this.props) {
      var img = new window.Image();
      img.onload = this.onImageLoad;
      img.src = this.props.src;
    }
  }

  componentWillReceiveProps() {
    if (this.props.src !== this.state.src) {
      this.setState({loaded: false});
      setTimeout(this.loadImage, 90);
    }
    this.setState({ 
        src: this.props.src,
        loaded: true
      });
  }

  render() {
    return (
      <img ref="img" {...this.props} src={this.props.src} />
    );
  }
}

export default ImageComponent
