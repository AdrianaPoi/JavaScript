import * as actionTypes from "../constants/projectConstants";

export const getProjectsReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PROJECTS_REQUEST:
      return {
        loading: true,
        projects: [],
      };
    case actionTypes.GET_PROJECTS_SUCCESS:
      return {
        projects: action.payload,
        loading: false,
      };
    case actionTypes.GET_PROJECTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
