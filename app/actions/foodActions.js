import * as types from '../constants/ActionTypes';
import photoSearch from '../api/getData';

function getFoodWithAPI(dispatch) {  
  photoSearch((data) => {
    dispatch({
      type: types.SEARCH_DONE,
      data: data,
    });
  });
}


export function getFood() {  
  return (dispatch) => {
    getFoodWithAPI(dispatch);
  };
}