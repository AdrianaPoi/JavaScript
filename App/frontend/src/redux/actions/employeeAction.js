import api from "./api.js";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  api
    .employeeAction()
    .fetchAll()
    .then((res) => {
      console.log(res);
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const create = (data, onSuccess) => (dispatch) => {
  api
    .employeeAction()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const update = (data, onSuccess) => (dispatch) => {
  api
    .employeeAction()
    .update(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const Delete = (id, onSuccess) => (dispatch) => {
  api
    .employeeAction()
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};