import * as types from '../constants/ActionTypes';

const initialState = {  
  status: 'IDLE',
  data: [],
  loaded: false,
  currentItem: null,
  mainItem: null,
};

function foodReducer(state = initialState, action) {  
  switch (action.type) {
  case types.SEARCH_DONE:
    console.log(action.data[0]);
    return {
      ...state,
      data: [...state.data, ...action.data],
      status: 'DONE',
      loaded: true,
      mainItem: action.data[0],
    };

  case types.UPDATE_CURRENT_ITEM:
  console.log("did!");
  console.log(action.itemInfo);
    return {
      ...state,
      currentItem: action.itemInfo,
    };

  case types.UPDATE_MAIN_ITEM:
  console.log("did!");
  console.log(action.itemInfo);
    return {
      ...state,
      mainItem: action.itemInfo,
    };
  default:
    return state;
  }
}

export default foodReducer