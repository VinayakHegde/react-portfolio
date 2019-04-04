import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import './Story.css';


class Story extends Component{
    constructor(props){
        super(props);
        this.onSensorChange = this.onSensorChange.bind(this);
        this.state = { visible: false };
    }

    onSensorChange(isVisible){
        isVisible && this.setState({visible:true});
    }

    render(){
        let {when, where, who, theme, children, visibilitySensorProps} = this.props,
            {visible } = this.state,
            hasHeadline = false;

        if(where.length > 0){
            where = '@ '.concat(where);
        }

        hasHeadline = where.length || who.length;
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
                                <h4 style={{color:`${theme}`}}>{where}</h4>
                                <hr/>
                                {children}
                            </div>
                        </div>
                    </Fragment>
                </VisibilitySensor>
            </div>
        );
    }
}

Story.propTypes = {
    when : PropTypes.string,
    where:PropTypes.string,
    who:PropTypes.string,
    theme: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    visibilitySensorProps: PropTypes.shape({})
}

Story.defaultProps = {
    when : '',
    where:'',
    who:'',
    theme: '#ddd',
    children: '',
    visibilitySensorProps: { 
        partialVisibility: true, 
        offset: { 
            bottom: 50 
        } 
    }
}

export default Story;