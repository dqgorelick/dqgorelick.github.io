import React from 'react';
import './App.css';
import MainWrapper from './components/MainWrapper';
import ProjectWrapper from './components/ProjectWrapper';

const App = props => {
    const currentPage = props.page;
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

export default App;
