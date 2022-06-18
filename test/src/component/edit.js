import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editData } from "../store/actions";

const Edite = (props) => {
  const state = useSelector((state) => state);
  const id = state.editedID;
  const [edit, setEdit] = useState(state.items[id-1]?.fullname);
  const inputElement = useRef();
  const dipacth = useDispatch();
  const Navigate = useNavigate();

  const btnclickHandler = () => {
    dipacth(editData(id, edit));
    Navigate("/");
  };

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <>
      <div className="editform">
        <input
          ref={inputElement}
          type="text"
          className="input-edit"
          value={edit}
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
