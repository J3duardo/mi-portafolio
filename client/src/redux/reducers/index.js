import {combineReducers} from "redux";
import selectedImgReducer from "./selectedImgReducer"
import sendMailReducer from "./sendMailReducer";
import selectedSection from "./selectedSectionReducer";

export default combineReducers({
  selectedImage: selectedImgReducer,
  mailReducer: sendMailReducer,
  selectedSection: selectedSection
})