import React from 'react';
import Timeline from 'Components/Timeline';
import StoryCard from 'Components/Cards/StoryCard';
import { UserExperiences, UserProjects } from 'Helpers/DataValidator';
import './Experience.scss';

const getProjectCount = (key) => ({
  count: UserProjects.filter((project) => key === project.companyKey).length,
});

const dataToObject = (exp) => ({
  company: exp.company || '',
  office: exp.office || '',
  jobTitle: exp.jobTitle || '',
  isPresent: exp.isPresent || false,
  startDate: exp.startDate || '',
  endDate: exp.endDate || '',
  description: exp.description || '',
  achievements: exp.achievements || [],
  other: exp.other || '',
  key: exp.misc.key,
  theme: exp.misc && exp.misc.theme ? exp.misc.theme : '#000',
});

const Experience = () => (
  <Timeline lineColor={'#ddd'}>
    {UserExperiences.length &&
      UserExperiences.map((exp, ind) => {
        const dto = dataToObject(exp);
        const when =
          dto.startDate.length === 0 && (!dto.endDate || dto.endDate.length === 0)
            ? ''
            : `${dto.startDate} - ${dto.isPresent ? 'Present' : dto.endDate}`;
        const { theme, jobTitle: who, company: whom, office: where } = dto;
        return (
          <StoryCard
            key={ind}
            {...{
              theme,
              when,
              who,
              whom,
              where,
              ...getProjectCount(dto.key),
            }}>
            <p>{dto.description}</p>
            {dto.achievements && dto.achievements.length > 0 && (
              <div>
                <h4>Achievement highlights</h4>
                {dto.achievements.length > 1 && (
                  <ol>
                    {dto.achievements.map((achievement, index) => (
                      <li key={index.toString()}>{achievement.details}</li>
                    ))}
                  </ol>
                )}
                {dto.achievements.length === 1 && <p>{dto.achievements[0].details}</p>}
              </div>
            )}
            {dto.other.length > 0 && (
              <div>
                <h5>Other responsibilities</h5>
                <p>{dto.other}</p>
              </div>
            )}
          </StoryCard>
        );
      })}
    {!UserExperiences.length && <span className='no-experiences'>No experience found!</span>}
  </Timeline>
);

export default Experience;
