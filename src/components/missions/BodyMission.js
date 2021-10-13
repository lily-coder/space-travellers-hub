import propTypes from 'prop-types';

const BodyMission = () => (
  <tbody>
    {
          <tr>
          <td>name</td>
          <td>
            description
          </td>
          <td>
            <span title="badge">Ongoing</span>
          </td>
          <td>
            <button type="button">Try me</button>
          </td>
        </tr>

    }
  </tbody>
);

BodyMission.propTypes = {
  missions: propTypes.arrayOf(propTypes.any).isRequired,
  onJoinMission: propTypes.func.isRequired,
};

export default BodyMission;