import React, { Component } from 'react';
import './Main.css';
import CONST from '../Helpers/Contants';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

class Main extends Component {
    render() {
        if(this.props.route === CONST.MENU.ABOUT){
            return (<About/>);
        } else if(this.props.route === CONST.MENU.EXPERIENCE){
            return (<Experience/>);
        } else if(this.props.route === CONST.MENU.PROJECTS){
            return (<Projects/>);
        } else if(this.props.route === CONST.MENU.SKILLS){
            return (<Skills/>);
        } else return null;
    }
}

export default Main;