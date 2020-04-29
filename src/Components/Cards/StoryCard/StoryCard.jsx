import React from 'react';
import PropTypes from 'prop-types';

import AnimatedVisibility from 'Components/AnimatedVisibility';
import useCustomState from 'hooks/useCustomState';

import './StoryCard.scss';

const StoryCard = ({ when, where, who, whom, count, theme, children }) => {
  const [cssClass, setCssClass] = useCustomState();
  const [child, setChild] = useCustomState(null);

  return (
    <AnimatedVisibility {...{ setCssClass }}>
      <div className={`storycard__caption__wrapper ${cssClass}`} style={{ color: `${theme}` }}>
        <time className='storycard__caption' style={{ background: `${theme}` }} title={when}>
          {when}
        </time>
      </div>
      <div className={`storycard__continer ${cssClass}`}>
        <div className={`storycard__content ${!children ? 'empty' : ''}`} style={{ borderColor: `${theme}` }}>
          <h3 style={{ color: `${theme}` }}>{who}</h3>
          <h4 style={{ color: `${theme}` }}>{whom.length ? `@ ${whom}, ${where}` : ''}</h4>
          {child && <hr />}
          {count > 0 && (
            <div className='storycard__project__count' style={{ background: `${theme}` }} title='Number of projects undertaken'>
              {count}
            </div>
          )}
          {child}
          <div className='storycard__toggler' style={{ background: `${theme}` }} onClick={() => setChild(child ? null : children)}>
            {!child ? 'Show details' : 'Hide Details'}
          </div>
        </div>
      </div>
    </AnimatedVisibility>
  );
};

StoryCard.propTypes = {
  when: PropTypes.string,
  where: PropTypes.string,
  who: PropTypes.string,
  whom: PropTypes.string,
  count: PropTypes.number,
  theme: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

StoryCard.defaultProps = {
  when: '',
  where: '',
  who: '',
  whom: '',
  theme: '#ddd',
  children: null,
};

export default StoryCard;
