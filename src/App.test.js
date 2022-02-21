import renderer from 'react-test-renderer';
import App from './App';

describe('APP(main component)', () => {
  it('it should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
