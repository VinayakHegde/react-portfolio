import React, { Component } from 'react';

import UserCard from "../Cards/UserCard/UserCard";
import Description from '../Display/Description/Description';
import {DESCRIPTIONFOR} from '../../Helpers/Enums';
import SkillCard from '../Cards/SkillCard/SkillCard';

import './About.css';

class About extends Component {
    render() {
        return (
            <article className="profile-content about">
                <div className="content-wrapper">
                    <UserCard cssClass="about-content"/>

                    <Description cssClass="about-content about-description"
                            descriptionFor={DESCRIPTIONFOR.USERDESCRIPTION}/>
                        
                    <div className="about-content">
                        <SkillCard bar={false}/>
                    </div>
                </div>
            </article>
        );
    }
}

export default About;