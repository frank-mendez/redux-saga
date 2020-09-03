import { Types } from '../actions/users';

const INITIAL_STATE = {
  items: [],
  getUserRequestLoading: true,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_REQUEST:
      return {
        getUserRequestLoading: false,
      };
    case Types.GET_USERS_SUCCESS:
      alert(action.payload);
      return {
        items: action.payload.items,
      };
    default:
      return state;
  }
}
