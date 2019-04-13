import './Experience.css';
import Timeline from '../Timeline/Timeline';
import StoryCard from '../Cards/StoryCard/StoryCard';
import {UserExperiences, UserProjects} from '../../Helpers/DataValidator';

import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <article className="profile-content">
                <Timeline lineColor={'#ddd'}>
                    {this.getStories()}
                </Timeline>
            </article>
        );
    }

    addAchievements(exp){
        let achievements = null;
        if(exp.achievements && exp.achievements.length){
            let achDetails = exp.achievements.map((achievement, index) => {
                return (
                    <li key={index.toString()}>{achievement.details}</li>
                );
            });
            achievements = (
                <div>
                    <h4>Achievement highlights</h4>
                    <ol>
                        {achDetails}
                    </ol>
                </div>
            )
        }

        return achievements;
    }

    addOtherResponsibilities(exp){
        return (exp.other ? (
            <div>
                <h5>Other responsibilities</h5>
                <p>{exp.other}</p>
            </div>
        ): null);
    }

    getStories(){
        if(!UserExperiences.length) return (
            <span className="no-experiences">No experience found!</span>
        );
        let stories = UserExperiences.map((exp, ind)=>{
            let dto = this.dto(exp);
            let when = dto.startDate.concat(' - ', dto.isPresent ? 'Present' : dto.endDate)
            if(dto.startDate.length === 0 && (!dto.endDate || dto.endDate.length === 0)){
                when = '';
            }
            return (
                <StoryCard key={ind.toString()} theme={dto.theme}
                    when= {when}
                    who={dto.jobTitle}
                    whom={dto.company}
                    where={dto.office}
                    count={this.getProjectCount(dto.key)}>
                    <p>{dto.description}</p>
                    {this.addAchievements(dto)}  
                    {this.addOtherResponsibilities(dto)}  
                </StoryCard>
            );
        });

        return stories;
    }
    getProjectCount(key){
        let count = 0;
        UserProjects.forEach(project => {
            if(key === project.companyKey){
                count++;
            }
        });
        return count;
    }
    dto(exp){
        return {
            "company": exp.company || "",
            "office": exp.office || "",
            "jobTitle": exp.jobTitle || "",
            "isPresent": exp.isPresent || false,
            "startDate": exp.startDate || "",
            "endDate" : exp.endDate || "",
            "description": exp.description || "",
            "achievements" : exp.achievements || [],
            "other": exp.other || null,
            "key":exp.misc.key,
            "theme":exp.misc && exp.misc.theme ? exp.misc.theme: "#000"
        };
    }
}

export default Experience;