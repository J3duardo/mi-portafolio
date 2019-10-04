import {SEND_MAIL_START, SEND_MAIL_SUCCESS, SEND_MAIL_ERROR} from "../actions/types";

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
        error: action.payload,
        sending: false,
        failed: true
      }
    default:
      return state
  }
}