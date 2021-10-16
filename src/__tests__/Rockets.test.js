import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets.js';
import '@testing-library/jest-dom/extend-expect.js';
import store from '../redux/configStore.js';

describe('Render the rockets list', () => {
  it('Renders the rockets correctly', () => {
    const rockets = TestRenderer.create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
    ).toJSON();
    expect(rockets).toMatchSnapshot();
  });
});