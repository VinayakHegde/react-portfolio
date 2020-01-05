import React from "react";
import PropTypes from "prop-types";

import SkillChart from "./SkillChart";
import SkillDescription from "./SkillDescription";
import "./SkillCard.scss";

const SkillCard = ({ isChart }) => (
  <div className="skill__card">
    {isChart 
      ? <SkillChart />
      : <SkillDescription />
    }
  </div>
);

SkillCard.propTypes = {
  isChart: PropTypes.bool
};
SkillCard.defaultProps = {
  isChart: false
};
export default React.memo(SkillCard);
