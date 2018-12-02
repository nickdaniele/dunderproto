import { REQUEST_HISTORY, RECEIVE_HISTORY } from '../actions';

const defaultState = {
  isFetching: false,
  entries: [],
  lastUpdated: null
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_HISTORY:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_HISTORY:
      return Object.assign({}, state, {
        isFetching: false,
        entries: action.entries,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}
