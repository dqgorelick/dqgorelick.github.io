require('../assets/styles/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import MainWrapper from './components/MainWrapper';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        console.log('this.props.page', this.props.page);
        return (
            <MainWrapper />
        )
    }
}

const Router = () => {
    const page = location.hash.slice(1);
    console.log('page',page);
    ReactDOM.render(<App page={page} />, document.getElementById('app'));
}

window.addEventListener('hashchange', Router, true);

Router();
