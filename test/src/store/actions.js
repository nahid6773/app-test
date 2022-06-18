import *  as actionTypes from "./actionTypes";

export const addData = (data) => {
  return {
    type: actionTypes.ADD_DATA,
    payload: data,
  };
};

export const deleteData = (dataId) => {
  return {
    type: actionTypes.DELETE_DATA,
    payload: dataId,
  };
};

export const editData = (id, data) => {
  return {
    type: actionTypes.EDIAT_DATA,
    id,
    data,
  };
};
export const fullNameEditing = (id) => {
  return {
    type: actionTypes.DATA_EDITED_ID,
    id,
  };
};
