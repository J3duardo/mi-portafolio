import {combineReducers} from "redux";
import selectedImgReducer from "./selectedImgReducer"
import sendMailReducer from "./sendMailReducer";

export default combineReducers({
  selectedImage: selectedImgReducer,
  formData: sendMailReducer
})