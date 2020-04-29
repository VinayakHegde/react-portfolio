import React from 'react';
import PropTypes from 'prop-types';

import { ICONTYPE } from 'Models/Enums';
import { UserDetails } from 'Helpers/DataValidator';
import Button from 'Components/Button';
import Spinner from 'Components/Spinner';
import Icon from 'Components/Icon';
import { pause } from 'Helpers/pause';
import useCustomState from 'hooks/useCustomState';
import './UserCard.scss';

const UserCard = ({ cssClass }) => {
  const cssClassName = 'user__card '.concat(cssClass);
  const knownAs = UserDetails.KnownAs.length ? '(Known as '.concat(UserDetails.KnownAs, ')') : '';
  const [isLoading, setIsLoading] = useCustomState(false);
  const downloadResume = async () => {
    setIsLoading(true);
    await pause();
    import(/*webpackChunkName: "resume" */ 'Assets/Data/vinayak.nandi@gmail.com.doc').then(({ default: resume }) => {
      const link = document.createElement('a');
      link.href = resume;
      link.rel = 'noopener noreferrer';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setIsLoading(false);
    });
  };
  return (
    <div className={cssClassName}>
      {isLoading && <Spinner />}
      <div className='user__details user__name user__friendly-name'>{UserDetails.FriendlyName}</div>
      <div className='user__details user__name user__known-as'>{knownAs}</div>
      <div className='user__details user__name user__known-as'>{UserDetails.JobTitle}</div>
      <div className='user__details user__title'>{UserDetails.subTitle}</div>
      <div className='user__details user__based-in'>
        <Icon type={ICONTYPE.MAP} />
        <span className='iconed-label'>{UserDetails.Location}</span>
      </div>
      <div className='user__details download__wrapper'>
        <Button
          {...{
            fnCallback: downloadResume,
            btnClass: 'download__button resume',
            tooltip: 'Download resume',
            type: ICONTYPE.FILEDOWNLOAD,
          }}>
          <span className='iconed-label'>Download Resume</span>
        </Button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  cssClass: PropTypes.string,
};

export default UserCard;
