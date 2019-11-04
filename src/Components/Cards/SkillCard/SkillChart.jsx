import React from 'react';
import {UserSkills} from "Helpers/DataValidator";

const SkillChart = () => (
  <div className="skills">
    {UserSkills.map((skill, index) => {
      const className = "".concat("chart ", skill.header.toLowerCase());
      return (
        <div key={`skill-${index}`} className={className}>
          <span className="chart__title">{skill.header}</span>
          <ul className="chart--horiz">
            {skill.topics.map((tpc, index) => {
              const width = tpc.score.toString().concat("%");
              return (
                <li
                  key={index + 1}
                  className="chart__bar"
                  style={{ width: `${width}` }}>
                  <span className="chart__label">{tpc.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    })}
    {!UserSkills.length && <span className="no-skills">Skills not found!</span>}
    {UserSkills.length &&
      <ul className="lines">
        <li className="line l--0">
          <span className="line__label">Started</span>
        </li>
        <li className="line l--25">
          <span className="line__label">Beginner</span>
        </li>
        <li className="line l--50">
          <span className="line__label">Itermediate</span>
        </li>
        <li className="line l--75">
          <span className="line__label">Advanced</span>
        </li>
        <li className="line l--100">
          <span className="line__label">Expert</span>
        </li>
      </ul>
    }
  </div>
);

export default SkillChart;