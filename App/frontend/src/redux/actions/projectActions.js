//import api from "./api";
import axios from "axios";
import { setHeaders, url } from "../../url";
import { toast } from "react-toastify";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  axios
    .get(`${url}/projects`, setHeaders())
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const create = (data) => (dispatch, getState) => {
  const author = getState().authReducer.name;
  const uid = getState().authReducer.id;
  axios
    .post(`${url}/new/project`, { ...data, author, uid }, setHeaders())
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error.response);

      toast.error(error.response?.data, {});
    });
};

export const update = (data, onSuccess) => (dispatch) => {
  axios
    .put(`${url}/edit/project`, data, setHeaders())
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

export const Delete = (id) => (dispatch) => {
  axios
    .delete(`${url}/delete/project/${id}`, setHeaders())
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};
