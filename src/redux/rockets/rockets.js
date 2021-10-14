/* eslint no-unused-vars : "off" */
const GET_ROCKET = 'GET_ROCKET';
const initialState = [];

export const getRocket = (payload) => ({
  type: GET_ROCKET,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
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