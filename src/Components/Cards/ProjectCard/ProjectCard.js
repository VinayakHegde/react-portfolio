import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Description from '../../Display/Description/Description';
import './ProjectCard.css';
import AnimatedVisibility from '../../AnimatedVisibility/AnimatedVisibility';

class ProjectCard extends Component {
    constructor(props){
        super(props);
        this.state = {visible : false}
    }
    
    onSensorChange(isVisible){
        isVisible && this.setState({visible:true});
    }

    render() {
        const {project, theme, children, index} = this.props;
        const {visible} = this.state;
        return (
            <AnimatedVisibility notifyChange={(isVisible) => this.onSensorChange(isVisible)}>
                <div className={`${visible ? 'bounce-in project-card' : 'is-hidden project-card'}`} style={{borderColor:`${theme}`}}>
                    {this.getProjectTitle(project, 'project-header project-title', index, theme)}
                    {children}
                    {this.getElementFor('About Project', project.description)}
                    {this.getSubProjects(project)}
                    {this.getElementFor('Programming', project.programming)}
                    {this.getElementFor('Tools', project.tools)}
                </div>
            </AnimatedVisibility>
        );
    }
    getProjectTitle(project, className, key, theme){
        if(project.title.length && project.startDate.length){
            return (
                <div className={className} key={key} style={{background:`${theme}`}}>
                    {project.title}
                    <small className="project-duration">{' ('.concat(project.startDate, ' - ', project.isPresent ? 'Present' : project.endDate, ' )')}</small>
                </div>
            );
        }

        return null;
    }

    getSubProjects(project){
        const subProjects = project.subProjects.map((subProjs, index)=> {
            const title = this.getProjectTitle(subProjs, 'sub-project-title', index);
            if(title){
                if(index === 0){
                    return [(<div key="-1" className="sub-project-header"><strong>Sub-projects</strong></div>), title]
                }
                return title;
            }
            return null;
        });

        return (
            <div className="project-content sub-projects">
                {subProjects}
            </div>
        );
    }
    getElementFor(type, text){
        if(text.length){
            return (
                <Description cssClass={type.concat(' project-content')} descriptionFor={`${'<strong>'.concat(type,'  : </strong>')} ${text}`}/>
            );
        }

        return null;
    }

}

ProjectCard.propTypes = {
    project : PropTypes.instanceOf(Object),
    theme : PropTypes.string,
    index : PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default ProjectCard;