import React, { Component } from 'react';
import './Main.css';
import CONST from '../Helpers/Contants';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

class Main extends Component {
    render() {
        if(this.props.route === CONST.NAV.ABOUT){
            return (<About/>);
        } else if(this.props.route === CONST.NAV.EXPERIENCE){
            return (<Experience/>);
        } else if(this.props.route === CONST.NAV.PROJECTS){
            return (<Projects/>);
        } else if(this.props.route === CONST.NAV.SKILLS){
            return (<Skills/>);
        } else return null;
    }
}

export default Main;