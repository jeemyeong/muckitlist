import { POP_ROUTE, PUSH_ROUTE } from '../constants/ActionTypes'

export function push (dispatch, route) {
  dispatch ({
    type: PUSH_ROUTE,
    route
  });
}

export function pop (dispatch) {
  dispatch ({
    type: POP_ROUTE
  })
}