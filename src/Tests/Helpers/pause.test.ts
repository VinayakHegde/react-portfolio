import { pause } from "Helpers/pause"

describe('pause utils', () => {
  it('pause function should return a promise', () => {
    expect(pause() instanceof Promise).toBeTruthy();
  });
  it('pause function should resolve promise always', async () => {
    let a = null;
    await pause().then(() => a = 'resolved');
    expect(a).toBe('resolved');
  });
  
  it('pause function should resolve promise after 3000ms', async () => {
    const start: number = new Date().getTime();
    await pause(3000).then(() => {
      const end: number = new Date().getTime();
      expect(end - start).toBeGreaterThanOrEqual(3000);
    });
  });
})