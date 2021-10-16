const GET_ROCKET = 'GET_ROCKET';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const UNRESERVE_ROCKET = 'UNRESERVE_ROCKET';
const initialState = [];

export const getRocket = (payload) => ({
  type: GET_ROCKET,
  payload,
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const unreserveRocket = (payload) => ({
  type: UNRESERVE_ROCKET,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) return rocket;
        return { ...rocket, reserved: true };
      });
    case UNRESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) return rocket;
        return { ...rocket, reserved: false };
      });
    case GET_ROCKET:
      return action.payload.map((key) => ({
        id: key.id,
        rocket_name: key.rocket_name,
        description: key.description,
        flickr_images: key.flickr_images[0],
        reserved: false,
      }));
    default:
      return state;
  }
};

export default reducer;