import { SELECTED_IMAGE, CLEAR_SELECTED_IMAGE } from "../actions/types";

const initialState = {
  selectedImage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: action.payload
      }
    case CLEAR_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: null
      }
    default:
      return state
  }
}