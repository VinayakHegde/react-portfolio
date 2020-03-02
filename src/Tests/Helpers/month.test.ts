import {monthDiff} from 'Helpers/month';

describe('monthDiff', () => {
  it('should return diff as 0 - valid d1 and d2', () => {
    const diff = monthDiff(new Date(2019, 11), new Date(2019, 11));
    expect(diff).toBe(0);
  });
  it('should return diff as 0 - invalid d1 and d2', () => {
    const diff = monthDiff(new Date(2019, 11), new Date(2019, 11));
    expect(diff).toBe(0);
  });
  it('should return diff as 2', () => {
    const diff = monthDiff(new Date(2019, 11), new Date(2020, 1));
    expect(diff).toBe(2);
  });
});