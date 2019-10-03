import { SELECTED_IMAGE, CLEAR_SELECTED_IMAGE } from "./types"

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