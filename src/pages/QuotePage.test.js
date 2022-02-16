import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import QuotePage from './QuotePage';

describe('<QuotePage />', () => {
  it('it should match snapshot', () => {
    const tree = renderer.create(<QuotePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
