import React, { Component } from 'react';
import PropTypes from 'prop-types';

import data from '../../../Data/profile.json';
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
            let skillsText = '<strong>Core Competencies : </strong>'
            data.skills.forEach((skill, index) => {
                skillsText = skillsText.concat('<br/><em><u>' ,skill.name, '</u></em>');

                if(skill.libraries && skill.libraries.length){
                    let libraries = skill.libraries.map(lib => lib.name);

                    if(libraries.length){
                        skillsText = skillsText.concat('<em> : </em>', libraries.toString().replace(/,/g, ', '));
                    }
                }
            });

            return (
                <Description cssClass="skills-text" descriptionFor={skillsText}></Description>
            );
        } else {
            const charts = data.skills.map((skill, index) => {
                const className = ''.concat('chart ', skill.name.toLowerCase());
                return (
                    <div key={index+1} className={className}>
                        <span className="chart__title">{skill.name}</span>
                        <ul className="chart--horiz">
                            {this.getSkillChips(skill.libraries)}
                        </ul>
                    </div>
                );
            });

            return (
                <div className="skills">
                    {charts}
                    {this.getSkillLevels()}
                </div>
            );
        }

    }

    getSkillChips(libraries){
        const chips = libraries.map((lib, index) => {
            const width = lib.score.toString().concat('%');
            return (
                <li key={index+1} className="chart__bar" style={{width: `${width}`}}>
                    <span className="chart__label">
                        {lib.name}
                    </span>
                </li>
            );    
        });

        return chips;
    }

    getSkillLevels(){
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