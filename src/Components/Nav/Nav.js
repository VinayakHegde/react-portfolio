import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Nav.css';
import DiscMenu from '../DiscMenu/DiscMenu';

class Header extends Component {
    onItemClick(item){
        console.log(item);
        this.props.setRoute(item);
    }
    render() {
        return (
            <div className="navigation-bar">
                <ul>
                    <li> 
                        {this.props.route}
                    </li>
                </ul>
                <DiscMenu onItemClick={this.onItemClick.bind(this)}></DiscMenu>
            </div>
        );
    }
}

Header.propTypes = {
    setRoute : PropTypes.func,
    route : PropTypes.string
};

export default Header;