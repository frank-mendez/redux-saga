import { Types } from '../actions/users';

const INITIAL_STATE = {
  items: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_REQUEST:
      alert(action.type);
      return {
        items: action.payload,
      };
    default:
      return state;
  }
}
