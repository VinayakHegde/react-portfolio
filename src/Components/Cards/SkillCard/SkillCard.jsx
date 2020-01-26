import React from "react";
import PropTypes from "prop-types";

import SkillChart from "./SkillChart";
import SkillDescription from "./SkillDescription";
import "./SkillCard.scss";

const SkillCard = ({ isChart }) => (isChart 
  ? <SkillChart />
  : <SkillDescription />
);

SkillCard.propTypes = {
  isChart: PropTypes.bool
};
SkillCard.defaultProps = {
  isChart: false
};
export default React.memo(SkillCard);
