import {useState} from 'react';

const useCssClass = (initialClass = '') => {
  const [cssClass, setCssClass] = useState(initialClass);
  const setClass = newClass => setCssClass(newClass);
  return [cssClass, setClass];
};

export default useCssClass;