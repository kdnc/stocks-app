import {
  SEARCH_BAR_VALUE_CHANGED,
} from './actionTypes';

/**
 * Action creator for searching through main search bar
 * @return {object} action object
 */
export function searchBarValueChanged(searchText) {
  return {
    type: SEARCH_BAR_VALUE_CHANGED,
    payload: {
      searchText
    }
  }
}
