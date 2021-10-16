import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider } from 'react-redux';
import store from '../../redux/configStore.js';
import Missions from '../Missions.js';

describe('Render the missions lists', () => {
  it('Renders the missions correctly', () => {
    const missions = TestRenderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(missions).toMatchSnapshot();
  });
});