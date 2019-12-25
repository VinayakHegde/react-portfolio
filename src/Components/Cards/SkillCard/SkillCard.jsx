import React from "react";
import PropTypes from "prop-types";

import SkillChart from "./SkillChart";
import SkillDescription from "./SkillDescription";
import "./SkillCard.scss";

const SkillCard = ({ chart }) => (
  <div className="skill__card">
    {chart && <SkillChart />}
    {!chart && <SkillDescription />}
  </div>
);

SkillCard.propTypes = {
  chart: PropTypes.bool
};
export default SkillCard;
