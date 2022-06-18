
import * as actionTypes from "./actionTypes";
import { data } from "./state";

export const reduser = (state = data, action) => {
  let newdata;
  switch (action.type) {
    //edit later add case
    case actionTypes.ADD_DATA:
      newdata = { ...state };
      newdata.items.push(action.payload);
      return newdata;

    case actionTypes.DELETE_DATA:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case actionTypes.EDIAT_DATA:
      newdata = state.items.map((item) =>
        item.id === action.id ? { ...item, fullname: action.data } : item
      );

      return { editedID: null, items: newdata };
    case actionTypes.DATA_EDITED_ID:
      return { ...state, editedID: action.id };

    default:
      return state;
  }
};
