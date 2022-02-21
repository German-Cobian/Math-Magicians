import '@testing-library/jest-dom/extend-expect';
import operate from './operate';

describe('operate', () => {
  test('should return string adding a number', () => {
    expect(operate('1', '1', '+')).toEqual('2');
  });
  test('should return string substracting a number', () => {
    expect(operate('1', '1', '-')).toEqual('0');
  });
  test('should return string multiplying a number', () => {
    expect(operate('3', '4', 'x')).toEqual('12');
  });
  test('should return string dividing a number', () => {
    expect(operate('400', '2', '÷')).toEqual('200');
  });
  test('should return string dividing by zero', () => {
    expect(operate('1', '0', '÷')).toEqual("Can't divide by 0.");
  });
  test('should return string residual a number', () => {
    expect(operate('5', '2', '%')).toEqual('1');
  });
});
