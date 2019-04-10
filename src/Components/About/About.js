import './About.css';
import UserCard from "../Cards/UserCard/UserCard";
import Description from '../Display/Description/Description';
import CONSTANTS from '../Helpers/Contants';

import React, { Component } from 'react';
import SkillCard from '../Cards/SkillCard/SkillCard';

class About extends Component {
    render() {
        const skillCardBar = false;
        return (
            <article className="profile-content about">
                <Description cssClass="about-content about-description"
                        descriptionFor={CONSTANTS.DESCRIPTIONFOR.USERDESCRIPTION}/>
                <UserCard cssClass="about-content"/>
                    
                <div className="about-content">
                    <SkillCard bar={skillCardBar}/>
                </div>
            </article>
        );
    }
}

export default About;