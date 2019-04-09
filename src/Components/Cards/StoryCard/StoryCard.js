import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import './StoryCard.css';


class StoryCard extends Component{
    constructor(props){
        super(props);
        this.onSensorChange = this.onSensorChange.bind(this);
        this.state = { visible: false };
    }

    onSensorChange(isVisible){
        isVisible && this.setState({visible:true});
    }

    render(){
        let {when, where, who, whom, count, theme, children, visibilitySensorProps} = this.props,
            {visible } = this.state;

        if(whom.length > 0){
            whom = '@ '.concat(whom, ', ', where);
        }

        return (
            <div className={classNames('story', {'empty': children === ''})} style={{color:`${theme}`}}>
                <VisibilitySensor {...visibilitySensorProps} onChange={this.onSensorChange}>
                    <Fragment>
                        <div className="story-caption-wrapper">
                            <div className={`${visible ? 'bounce-in' : 'is-hidden'}`}>
                                <span className="story-caption-container">
                                    <time className="story-caption"
                                        style={{background:`${theme}`}}
                                        title={when}>
                                        {when}
                                    </time>
                                </span>
                            </div>
                        </div>
                        <div className="story-continer">
                            <div className={`story-content ${ visible ? 'bounce-in' : 'is-hidden'}`}
                                style={{borderColor:`${theme}`}}>
                                <h3 style={{color:`${theme}`}}>{who}</h3>
                                <h4 style={{color:`${theme}`}}>{whom}</h4>
                                <hr/>
                                {this.getProjectCount(count, theme)}
                                {children}
                            </div>
                        </div>
                    </Fragment>
                </VisibilitySensor>
            </div>
        );
    }

    getProjectCount(count, theme){
        if(count > 0){
            return (
                <div className="project-count" style={{background:`${theme}`}} title="Number of projects undertaken">{count}</div>
            );
        }

        return null;
    }
}

StoryCard.propTypes = {
    when : PropTypes.string,
    where:PropTypes.string,
    who:PropTypes.string,
    whom:PropTypes.string,
    count: PropTypes.number,
    theme: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    visibilitySensorProps: PropTypes.shape({})
}

StoryCard.defaultProps = {
    when : '',
    where:'',
    who:'',
    whom:'',
    theme: '#ddd',
    children: '',
    visibilitySensorProps: { 
        partialVisibility: true, 
        offset: { 
            bottom: 50 
        } 
    }
}

export default StoryCard;