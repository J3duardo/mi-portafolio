import {combineReducers} from "redux";
import selectedImgReducer from "./selectedImgReducer"

export default combineReducers({
  selectedImage: selectedImgReducer
})