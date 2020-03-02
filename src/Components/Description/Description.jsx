import React from "react";
import PropTypes from "prop-types";

import { UserDetails } from "Helpers/DataValidator";
import { DESCRIPTIONFOR } from "Models/Enums";

const Description = ({ cssClass, descriptionFor }) => {
  const getText = key => {
    switch (key) {
      case DESCRIPTIONFOR.USERDESCRIPTION:
        return UserDetails.Description.replace(
          "{autoexp}",
          UserDetails.Experience
        );
      default:
        return key;
    }
  };
  return (
    <p className={cssClass}
      dangerouslySetInnerHTML={{
        __html: `${getText(descriptionFor)}`
      }}
    ></p>
  );
};

Description.propTypes = {
  cssClass: PropTypes.string,
  descriptionFor: PropTypes.string
};

export default Description;
