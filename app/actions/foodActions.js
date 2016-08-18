import * as types from '../constants/ActionTypes';
import getData from '../api/getData';

function getFoodWithAPI(dispatch) {  
  getData((data) => {
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