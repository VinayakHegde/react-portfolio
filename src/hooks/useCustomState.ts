import {useState, Dispatch} from 'react';
import { typeSBN } from 'Models/Types';

export default (initialState: typeSBN = ''): [typeSBN, Function] => {
  const [state, setState]: [typeSBN, Dispatch<typeSBN>] = useState(initialState);
  const setNewState: Function = (newState: typeSBN) => setState(newState);
  return [state, setNewState];
};