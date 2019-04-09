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
                <UserCard cssClass="about-user-card"/>
                <div className="about-content ">
                    <Description cssClass="about-description"
                        descriptionFor={CONSTANTS.DESCRIPTIONFOR.USERDESCRIPTION}/>
                    <SkillCard bar={skillCardBar}/>
                </div>
            </article>
        );
    }
}

export default About;