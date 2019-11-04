import React from 'react';
import PropTypes from "prop-types";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLaptop,
  faLaptopCode,
  faBriefcase,
  faProjectDiagram,
  faTools,
  faHome,
  faUserSecret,
  faMapMarked,
  faFileDownload
} from "@fortawesome/free-solid-svg-icons";

import {ICONTYPE, MENU} from "Helpers/Enums";

const Icon = ({type}) => {
  let icon = '';
  switch (type) {
    case ICONTYPE.PHONE:
      icon = faPhone;
      break;
    case ICONTYPE.EMAIL:
      icon = faEnvelope;
      break;
    case ICONTYPE.GITHUB:
      icon = faGithub;
      break;
    case ICONTYPE.LINKEDIN:
      icon = faLinkedinIn;
      break;
    case ICONTYPE.DEMO:
      icon = faLaptop;
      break;
    case ICONTYPE.CODE:
      icon = faLaptopCode;
      break;
    case ICONTYPE.USER:
      icon = faUserSecret;
      break;
    case ICONTYPE.MAP:
      icon = faMapMarked;
      break;
    case ICONTYPE.FILEDOWNLOAD:
      icon = faFileDownload;
      break;
    case MENU.PROJECTS:
      icon= faProjectDiagram;
      break;
    case MENU.EXPERIENCE:
      icon= faBriefcase;
      break;
    case MENU.SKILLS:
      icon= faTools;
      break;
    default:
      icon= faHome;
      break;
  }

  return (<FontAwesomeIcon {...{icon}} />);
        
};

Icon.propTypes = {
  type: PropTypes.string
};

export default Icon;
