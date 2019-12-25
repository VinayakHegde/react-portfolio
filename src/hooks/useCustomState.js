import {useState} from 'react';

const useCustomState = (initialState = '') => {
  const [state, setState] = useState(initialState);
  const setNewState = newState => setState(newState);
  return [state, setNewState];
};

export default useCustomState;