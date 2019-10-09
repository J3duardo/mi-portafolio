import { SELECTED_SECTION } from "../actions/types";

const initialState = {
  selectedSection: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SELECTED_SECTION:
      return {
        ...state,
        selectedSection: action.payload
      }
    default:
      return state
  }
}