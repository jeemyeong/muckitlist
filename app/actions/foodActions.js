import * as types from '../constants/ActionTypes';
import getData from '../api/getData';

function getFoodWithAPI(dispatch) {  
  getData((data) => {
    {updateCurrentItem(data[0])};
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