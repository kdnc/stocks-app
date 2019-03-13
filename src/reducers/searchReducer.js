import { SEARCH_BAR_VALUE_CHANGED } from '../actions/actionTypes';

const initialState = {
  searchText: '',
};

/**
 * Reducer for the search bar
 * @param {object} state - State for the search reducer
 * @param {object} action - Dispatched action object
 * @return {object} reducer state
 */
function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BAR_VALUE_CHANGED:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default searchReducer;