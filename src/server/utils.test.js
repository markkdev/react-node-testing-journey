import { stringReverse } from './utils';

describe('test server utils', () => {
  it('should properly reverse a string', () => {
    expect(stringReverse('Hello')).toBe('olleH');
  });
});
