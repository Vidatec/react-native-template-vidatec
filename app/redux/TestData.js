/**
 * app/redux/TestData
 * ---
 * A sample Redux file. Roughly follows the Redux Ducks methodology.
 */

import * as People from 'app/network/People';
import { ThunkAction } from 'redux-thunk';

const initialState = {
  timestamp: 0,
  peopleList: []
};

export const UPDATE_TIME = 'TestData/UPDATE_TIME';
export const UPDATE_PEOPLE = 'TestData/UPDATE_PEOPLE';

function shuffleArray (array: any[]): any[] {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export function updateTime (): Action {
  // get a timestamp and pass it to the reducer
  return {
    type: UPDATE_TIME,
    timestamp: new Date().getTime()
  };
}

export function updateTimeAsync (delay: number = 2000): ThunkAction {
  return dispatch => {
    setTimeout(() => {
      dispatch(updateTime());
    }, delay);
  };
}

export function updatePeople (): ThunkAction {
  return async dispatch => {
    const response = await People.getList();
    if (response.ok) {
      dispatch({
        type: UPDATE_PEOPLE,
        data: shuffleArray(response.data)
      });
    }
  };
}

export default function TestDataReducer (state = initialState, action: Action): State {
  switch (action.type) {
  case UPDATE_TIME:
    return {
      ...state,
      timestamp: action.timestamp
    };

  case UPDATE_PEOPLE:
    return {
      ...state,
      peopleList: action.data
    };

  default:
    return state;
  }
}
