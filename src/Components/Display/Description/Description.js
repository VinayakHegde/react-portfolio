import React, { Component } from 'react';
import PropTypes from 'prop-types';

import data from '../../../Data/profile.json';
import CONSTANTS from '../../Helpers/Contants';

class Description extends Component {
    render() {
        const {cssClass, descriptionFor} = this.props;
        return (
            <div className={cssClass}>
                <p dangerouslySetInnerHTML={{__html:`${this.getText(descriptionFor)}`}}></p>
            </div>
        );
    }

    getText(key){
        switch(key){
            case CONSTANTS.DESCRIPTIONFOR.USERDESCRIPTION:
            return data.user.description;
            default: return key;
        }
    }
}

Description.propTypes = {
    cssClass: PropTypes.string,
    descriptionFor:PropTypes.string
}

export default Description;