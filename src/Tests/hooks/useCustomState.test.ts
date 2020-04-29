import useCustomState from 'hooks/useCustomState';
import { act } from 'react-dom/test-utils';
import { typeSBN } from 'Models/Types';
import renderHook from 'Tests/utils/renderHook';

let [val, setVal]: [typeSBN, Function] = [false, () => {}];
let state = '';
beforeEach(() => {
  renderHook(() => {
    [val, setVal] = useCustomState(state);
  });
});
describe('useCustomState', () => {
  it('should return empty state', () => {
    expect(val).toBe('');
    state = 'test state';
  });
  it('should have the value to be "test state"', () => {
    expect(val).toBe('test state');
  });
  it('should have the value to be "true"', () => {
    act(() => {
      setVal(true);
    });
    expect(val).toBe(true);
  });
  it('should have the value of number type', () => {
    act(() => {
      setVal(3);
    });
    expect(typeof val).toBe('number');
  });
});
