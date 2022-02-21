import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('it should match snapshot', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
