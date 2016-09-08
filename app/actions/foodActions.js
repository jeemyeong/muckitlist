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

export function updateCurrentItem (itemInfo) {
  console.log("updateCurrentItem");
  console.log(itemInfo);
  return (dispatch) => {
      dispatch ({
      type: types.UPDATE_CURRENT_ITEM,
      itemInfo
    })
  };
}
export function updateMainItem (itemInfo) {
	console.log("updateMainItem");
	console.log(itemInfo);
	return (dispatch) => {
      dispatch ({
	    type: types.UPDATE_MAIN_ITEM,
	    itemInfo
	  })
  };
}