import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CONST from '../Helpers/Contants';
import './Nav.css';

class Nav extends Component {
    onClick(evt){
        this.props.setRoute(evt.target.dataset['route']);
    }
    render() {
        return (
            <div className="navigation-bar">
                <ul>
                    <li onClick={this.onClick.bind(this)} 
                        data-route={CONST.NAV.ABOUT}
                        className={this.props.route === CONST.NAV.ABOUT ? 'active-route' : 'inactive-route'}>
                        {CONST.NAV.ABOUT}
                    </li>
                    <li onClick={this.onClick.bind(this)} 
                        data-route={CONST.NAV.EXPERIENCE}
                        className={this.props.route === CONST.NAV.EXPERIENCE ? 'active-route' : 'inactive-route'}>
                        {CONST.NAV.EXPERIENCE}
                    </li>
                    <li onClick={this.onClick.bind(this)} 
                        data-route={CONST.NAV.PROJECTS}
                        className={this.props.route === CONST.NAV.PROJECTS ? 'active-route' : 'inactive-route'}>
                        {CONST.NAV.PROJECTS}
                    </li>
                    <li onClick={this.onClick.bind(this)} 
                        data-route={CONST.NAV.SKILLS}
                        className={this.props.route === CONST.NAV.SKILLS ? 'active-route' : 'inactive-route'}>
                        {CONST.NAV.SKILLS}
                    </li>
                </ul>
            </div>
        );
    }
}

Nav.propTypes = {
    setRoute : PropTypes.func,
    route : PropTypes.string
};

export default Nav;