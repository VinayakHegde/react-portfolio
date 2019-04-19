import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

import './AnimatedVisibility.css';


class AnimatedVisibility extends Component {
    render() {
        const visibilitySensorProps = { 
            partialVisibility: true, 
            offset: { 
                bottom: 50 
            } 
        };
        const {children} = this.props;
        return (
            <div className="animated-visibility-container">
                <VisibilitySensor {...visibilitySensorProps} onChange={this.props.notifyChange}>
                    <Fragment>
                        {children}
                    </Fragment>
                </VisibilitySensor>
            </div>
        );
    }
}

AnimatedVisibility.propTypes = {
    notifyChange : PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
};
export default AnimatedVisibility;