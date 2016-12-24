import '../assets/styles/all.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import MainWrapper from './components/MainWrapper';
import ProjectWrapper from './components/ProjectWrapper';
import { getHashLocation } from './helpers';

class App extends React.Component {
  render() {
    const currentPage = this.props.page;
    switch (currentPage) {
      case (''):
        return (<MainWrapper page="home"/>);
      case ('about'):
        return (<MainWrapper page="about"/>)
      default:
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        return (<ProjectWrapper page={currentPage}/>);
    }
  }
}

const Router = () => {
  const page = getHashLocation();
  ReactDOM.render(<App page={page} />, document.getElementById('app'));
}

window.addEventListener('hashchange', Router, false);

Router();
