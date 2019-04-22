import React, { Component } from 'react';

import UserCard from "../Cards/UserCard/UserCard";
import Description from '../Display/Description/Description';
import {DESCRIPTIONFOR} from '../../Helpers/Enums';
import SkillCard from '../Cards/SkillCard/SkillCard';

import './About.css';
import AnimatedVisibility from '../AnimatedVisibility/AnimatedVisibility';

class About extends Component {
    constructor(props){
        super(props);
        this.state = { visible: false };
    }

    onSensorChange(isVisible){
        isVisible && this.setState({visible:true});
    }
    render() {
        const {visible} = this.state;
        return (
            <article className="profile-content">
                <div className="content-wrapper">
                    <AnimatedVisibility notifyChange={(isVisible) => this.onSensorChange(isVisible)}>
                        <UserCard cssClass={`${visible ? 'about-content bounce-in' : 'about-content is-hidden'}`}/>

                        <Description cssClass={`${visible ? 'about-content about-description bounce-in' : 'about-content about-description is-hidden'}`}
                                descriptionFor={DESCRIPTIONFOR.USERDESCRIPTION}/>
                            
                        <div className={`${visible ? 'about-content bounce-in' : 'about-content is-hidden'}`}>
                            <SkillCard bar={false}/>
                        </div>
                    </AnimatedVisibility>
                </div>
            </article>
        );
    }
}

export default About;