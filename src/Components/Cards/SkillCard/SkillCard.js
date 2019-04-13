import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {UserSkills} from '../../../Helpers/DataValidator';
import Description from '../../Display/Description/Description';
import './SkillCard.css';

class SkillCard extends Component {
    render() {
        const {bar} = this.props;
        return (
            <div className="skill-card">
                {this.getSkill(bar)}
            </div>
        );
    }

    getSkill(bar){
        if(!bar){
            if(UserSkills.length){
                let skillsText = '<strong>Core Competencies : </strong>'
                UserSkills.forEach((skill, index) => {
                    skillsText = skillsText.concat('<br/><em><u>', skill.header, '</u></em>');

                    if(skill.topics && skill.topics.length){
                        let topics = skill.topics.map(tpcs => tpcs.name);

                        if(topics.length){
                            skillsText = skillsText.concat('<em> : </em>', topics.toString().replace(/,/g, ', '));
                        }
                    }
                });

                return (
                    <Description cssClass="skills-text" descriptionFor={skillsText}></Description>
                );
            } 
            return null;
        } else {
            const charts = UserSkills.map((skill, index) => {
                const className = ''.concat('chart ', skill.header.toLowerCase());
                return (
                    <div key={index+1} className={className}>
                        <span className="chart__title">{skill.header}</span>
                        <ul className="chart--horiz">
                            {this.getSkillTopics(skill)}
                        </ul>
                    </div>
                );
            });

            return (
                <div className="skills">
                    {charts}
                    {this.getScoreLevels()}
                </div>
            );
        }

    }

    getSkillTopics(skill){
        const topics = skill.topics.map((tpc, index) => {
            const width = tpc.score.toString().concat('%');
            return (
                <li key={index+1} className="chart__bar" style={{width: `${width}`}}>
                    <span className="chart__label">
                        {tpc.name}
                    </span>
                </li>
            );    
        });

        return topics;
    }

    getScoreLevels(){
        if(!UserSkills.length) return (
            <span className="no-skills">Skills not found!</span>
        );
        return(
            <ul className="lines">
                <li className="line l--0">
                    <span className="line__label">
                        Started
                    </span>
                </li>
                <li className="line l--25">
                    <span className="line__label">
                        Beginner
                    </span>
                </li>
                <li className="line l--50">
                    <span className="line__label">
                        Itermediate
                    </span>
                </li>
                <li className="line l--75">
                    <span className="line__label">
                        Advanced
                    </span>
                </li>
                <li className="line l--100">
                    <span className="line__label">
                        Expert
                    </span>
                </li>
            </ul>
        );
    }
}

SkillCard.propTypes = {
    bar : PropTypes.bool
}
export default SkillCard;