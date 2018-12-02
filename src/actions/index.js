import fetch from 'cross-fetch';

export const REQUEST_HISTORY = 'REQUEST_HISTORY';
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';

function requestHistory() {
  return {
    type: REQUEST_HISTORY
  };
}

function receiveHistory(json) {
  return {
    type: RECEIVE_HISTORY,
    entries: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}

export function fetchHistory() {
  return (dispatch) => {
    dispatch(requestHistory());
    return fetch('https://randomuser.me/api/?results=10')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveHistory(json)));
  };
}
