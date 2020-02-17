import { SELECTED_IMAGE, CLEAR_SELECTED_IMAGE, SEND_MAIL_START, SEND_MAIL_ERROR, SEND_MAIL_SUCCESS, SELECTED_SECTION } from "./types";
import axios from "axios";

export const selectImg = (data) => {
  return {
    type: SELECTED_IMAGE,
    payload: data
  }
}

export const clearSelectedImg = () => {
  return {
    type: CLEAR_SELECTED_IMAGE
  }
}

//Enviar el email
export const sendMailAsync = (data) => {
  return async (dispatch) => {
    try {
      dispatch({type: SEND_MAIL_START});
      await axios({
        method: "POST",
        url: "/",
        data: {
          nombre: data.nombre,
          email: data.email,
          mensaje: data.mensaje
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      dispatch({type: SEND_MAIL_SUCCESS})   
    } catch (error) {
      if(error.response) {
        return dispatch({
          type: SEND_MAIL_ERROR,
          payload: {errorMessage: error.response.data.message, error: {...error.response}}
        })
      }
      dispatch({
        type: SEND_MAIL_ERROR,
        payload: error.message
      })
    }
  }
}

//Hacer scroll a la sección seleccionada
export const scrollToSection = (sectionId) => {
  return {
    type: SELECTED_SECTION,
    payload: sectionId
  }
}