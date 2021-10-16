/* eslint-disable no-unused-vars */
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider } from 'react-redux';
import store from '../../redux/configStore.js';
import ProfileRocketsDisplay from '../ProfileRocketsDisplay.js';

describe('Render the rockets list in profile page', () => {
  it('Renders the rockets list in profile page correctly', () => {
    const rocketsList = TestRenderer.create(
        <Provider store={store}>
          <ProfileRocketsDisplay />
        </Provider>,
    ).toJSON();
    expect(rocketsList).toMatchSnapshot();
  });
});