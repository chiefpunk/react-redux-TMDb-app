import { FETCH_VIDEO_SUCCESS } from '../constants/ActionTypes'

export function videoDetails(state = [], action) {
  switch (action.type) {
    case FETCH_VIDEO_SUCCESS:
      return {
        ...action.videoDetails
      }
    default:
      return state;
  }
}
