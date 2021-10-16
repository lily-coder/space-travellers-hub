const initialState = [];
const JOIN_MISSION = 'JOIN_MISSION';
const FETCH_DATA = 'FETCH_DATA';
const LEAVE_MISSION = 'LEAVE_MISSION';

export const fetchDataRequest = () => async (dispatch) => {
  const request = await fetch('https://api.spacexdata.com/v3/missions');
  const dataResult = await request.json();
  dispatch({
    type: FETCH_DATA,
    payload: [...dataResult],
  });
};

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionsReducer;
