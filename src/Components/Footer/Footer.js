import React, { Component } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobe} from '@fortawesome/free-solid-svg-icons';
 

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="chip">
                    <div className="chip-head">
                        <FontAwesomeIcon icon={faGlobe}/>
                    </div>
                    <div className="chip-head">
                        <FontAwesomeIcon icon={faReact}/>
                    </div>
                    <div className="chip-head">
                        <FontAwesomeIcon icon={faJsSquare}/>
                    </div>
                    <div className="chip-content"> Developer</div>
                </div>
            </div>
        );
    }
}

export default Footer;