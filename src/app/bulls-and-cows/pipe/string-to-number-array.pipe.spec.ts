import {StringToNumberArrayPipe} from './string-to-number-array.pipe';

describe('StringToNumberArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new StringToNumberArrayPipe();
    expect(pipe).toBeTruthy();
  });
  it('should convert to number array', () => {
    const pipe = new StringToNumberArrayPipe();
    expect(pipe.transform('1234')).toEqual([1, 2, 3, 4]);
    expect(pipe.transform('0234')).toEqual([0, 2, 3, 4]);
  });
});
