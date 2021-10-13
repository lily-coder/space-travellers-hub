import propTypes from 'prop-types';

const HeaderMission = () => (
  <tbody>
    {
        <tr >
          <td>onGoing</td>
          <td>
            okay
          </td>
          <td>
            <span>ongoing</span>
          </td>
          <td>
            <button type="button">Click</button>
          </td>
        </tr>
    }
  </tbody>
);

HeaderMission.propTypes = {
  missions: propTypes.arrayOf(propTypes.any).isRequired,
  onJoinMission: propTypes.func.isRequired,
};

export default HeaderMission;