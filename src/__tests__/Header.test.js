import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore.js';
import Navbar from '../components/Navbar.js';

describe('Render the header', () => {
  it('Renders the header', () => {
    const header = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    ).toJSON();
    expect(header).toMatchSnapshot();
  });
});
