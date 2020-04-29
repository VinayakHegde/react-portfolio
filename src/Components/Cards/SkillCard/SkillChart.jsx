import React from 'react';
import { UserSkills } from 'Helpers/DataValidator';

const SkillChart = () => (
  <div className='skill'>
    {UserSkills.map((skill, index) => {
      const className = `skill__chart ${skill.header.toLowerCase()}`;
      return (
        <div key={`skill-${index}`} className={className}>
          <span className='skill__chart__title'>{skill.header}</span>
          <ul className='skill__chart--horiz'>
            {skill.topics.map((tpc, index) => (
              <li key={index + 1} className='skill__chart__bar' style={{ width: `${tpc.score.toString()}%` }}>
                <span className='skill__chart__label'>{tpc.name}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    })}
    {!UserSkills.length && <span className='no-skills'>Skills not found!</span>}
    {UserSkills.length && (
      <ul className='line__wrapper'>
        <li className='line strength__000'>
          <span className='line__label'>Started</span>
        </li>
        <li className='line strength__025'>
          <span className='line__label'>Beginner</span>
        </li>
        <li className='line strength__050'>
          <span className='line__label'>Itermediate</span>
        </li>
        <li className='line strength__075'>
          <span className='line__label'>Advanced</span>
        </li>
        <li className='line strength__100'>
          <span className='line__label'>Expert</span>
        </li>
      </ul>
    )}
  </div>
);

export default SkillChart;
