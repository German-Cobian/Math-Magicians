import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import CalculatorPage from './CalculatorPage';

describe('<CalculatorPage />', () => {
  it('it should match snapshot', () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
