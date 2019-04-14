import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {UserDetails} from '../../../Helpers/DataValidator';
import {DESCRIPTIONFOR} from '../../../Helpers/Enums';

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
            case DESCRIPTIONFOR.USERDESCRIPTION:
                return UserDetails.Description.replace('{autoexp}', UserDetails.Experience());
            default: return key;
        }
    }
}

Description.propTypes = {
    cssClass: PropTypes.string,
    descriptionFor:PropTypes.string
}

export default Description;