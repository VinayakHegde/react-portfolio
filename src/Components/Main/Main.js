import React, { Component } from 'react';
import './Main.css';
import {MENU} from '../../Helpers/Enums';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

class Main extends Component {
    render() {
        if(this.props.route === MENU.ABOUT){
            return (<About/>);
        } else if(this.props.route === MENU.EXPERIENCE){
            return (<Experience/>);
        } else if(this.props.route === MENU.PROJECTS){
            return (<Projects/>);
        } else if(this.props.route === MENU.SKILLS){
            return (<Skills/>);
        } else return null;
    }
}

export default Main;