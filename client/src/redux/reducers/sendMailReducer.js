import {SEND_MAIL_START, SEND_MAIL_SUCCESS, SEND_MAIL_ERROR, CLEAR_MAIL_REDUCER} from "../actions/types";

const initialState = {
  mailData: {},
  error: {},
  sending: false,
  success: false,
  failed: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SEND_MAIL_START:
      return {
        ...state,
        sending: true
      }
    case SEND_MAIL_SUCCESS:
      return {
        ...state,
        sending: false,
        success: true
      }
    case SEND_MAIL_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        error: {...action.payload.error},
        sending: false,
        failed: true
      }
    case CLEAR_MAIL_REDUCER:
      return {
        ...initialState
      }
    default:
      return state
  }
}