import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editData } from "../store/actions";

const Edite = (props) => {
  const [edit, setEdit] = useState();

  const dipacth = useDispatch();
  const id = useSelector((state) => state.editedID);
  const Navigate = useNavigate();

  const btnclickHandler = () => {
    dipacth(editData(id, edit));
    Navigate("/");
  };

  return (
    <>
      <div className="editform">
        <input
          type="text"
          className="input-edit"
          onChange={(e) => setEdit(e.target.value)}
        />
        <button className="btn-edit" onClick={btnclickHandler}>
          submit
        </button>
      </div>
    </>
  );
};
export default Edite;
