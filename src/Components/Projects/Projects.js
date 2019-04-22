import React, { Component } from 'react';

import ProjectCard from '../Cards/ProjectCard/ProjectCard';
import {UserProjects,  UserExperiences} from '../../Helpers/DataValidator';
import {PROJECTSTYPE} from '../../Helpers/Enums';

import './Projects.css';

class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            type : PROJECTSTYPE.WORK
        };
    }
    setProjectType(type){
        this.setState({
            type:type
        });
    }
    render() {
        return (
            <article className="profile-content">
                <div className="toolbar">
                    <span onClick={() => this.setProjectType(PROJECTSTYPE.WORK)} className={this.state.type === PROJECTSTYPE.WORK ? "toolbar-button disc active" : "toolbar-button disc"}>Work</span>
                    <span onClick={() => this.setProjectType(PROJECTSTYPE.PERSONAL)} className={this.state.type === PROJECTSTYPE.PERSONAL ? "toolbar-button disc active" : "toolbar-button disc"}>Personal</span>
                </div>
                <div className="content-wrapper">
                    {this.getProjectCards()}
                </div>            
            </article>
        );
    }
    getProjectCards(){
        switch(this.state.type){
            case PROJECTSTYPE.WORK:
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
            case PROJECTSTYPE.PERSONAL:
                return (
                    <span className="under-construction">Under Construction..!</span>
                );
            default: return null;
        }
    }
    getOptions(companyKey){
        const experience = UserExperiences.find(function(exp) {
            return (exp.misc.key === companyKey);
        });
        
        return { 
            company: experience ? experience.company : '',
            theme: experience ? experience.misc.theme : '#000'
        };
    }
}

export default Projects;