import {act} from 'react-dom/test-utils';
import useLocalStorage from 'hooks/useLocalStorage';
import renderHook from 'Tests/utils/renderHook';
import { ILocalStorage } from 'Models/ILocalStorage';

let [val, setVal]: [string, Function] = ['', () => {}];
let state: ILocalStorage = {initialValue: '', key: 'Key'};
beforeEach(() => {
  renderHook(() => {
    [val, setVal] = useLocalStorage(state);
  })
});

describe('useLocalStorage', () => {
  it('should have initial value as empty string', () => {
    expect(
      () => useLocalStorage({initialValue:'', key: ''})
    ).toThrow();

    state = {initialValue: 'Test', key: 'Key'}
  });
  it('should have the value as test', () => {
    expect(val).toBe('Test');
  });
  it('should have the value as test-1', () => {
    act(() => {
      setVal('Test-1');
    });
    expect(val).toBe('Test-1');
  })
})