import * as types from '../constants/ActionTypes';

const initialState = {  
  status: 'IDLE',
  data: [],
  loaded: false,
};

function foodReducer(state = initialState, action) {  
  switch (action.type) {
  case types.SEARCH_DONE:
    return {
      ...state,
      data: [...state.data, ...action.data],
      status: 'DONE',
      loaded: true,
    };
  default:
    return state;
  }
}

export default foodReducer