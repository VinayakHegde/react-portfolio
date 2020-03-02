import React from 'react';
import {mount} from 'enzyme';

const TestHook: React.FunctionComponent<{useHook: Function}> = ({ useHook }) => {
  useHook();
  return null;
};

export default (useHook: Function) => {
  return mount(<TestHook {...{useHook}}/>);
};