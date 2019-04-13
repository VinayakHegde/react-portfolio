import React, { Component } from 'react';

import ProjectCard from '../Cards/ProjectCard/ProjectCard';
import data from '../../Data/profile.json';
import {UserProjects} from '../../Helpers/DataValidator';

class Projects extends Component {
    render() {
        return (
            <article className="profile-content">
                <div className="content-wrapper">
                    {this.getProjectCards()}
                </div>            
            </article>
        );
    }
    getProjectCards(){
        if(!UserProjects.length) return (
            <span className="no-projects">No projects found!</span>
        );
        return UserProjects.map((project, index) =>{
            const options = this.getOptions(project.companyKey);
            return (
                <ProjectCard key={index+1} index={(index+1).toString()} project={project} theme={options.theme}>
                    <div className="project-header project-company" style={{background:`${options.theme}`}}>{options.company}</div>
                </ProjectCard>
            );
        });
    }
    getOptions(companyKey){
        const experience = data.experience.find(function(exp) {
            return (exp.misc.key === companyKey);
        });
        
        return { 
            company: experience ? experience.company : '',
            theme: experience ? experience.misc.theme : '#000'
        };
    }
}

export default Projects;