import { useDispatch, useSelector } from "react-redux";
import { deleteData, fullNameEditing } from "../store/actions";
import { useNavigate } from "react-router-dom";
// import Edite from "./edit";
import Showdata from "./showdta";

const Form = () => {
  const Navigate = useNavigate();
  const data = useSelector((state) => state);
  const dispacth = useDispatch();

  const editclickhandel = (id) => {
    dispacth(fullNameEditing(id));
    Navigate("/edit");
  };

  return (
    <>
      <div className="form-container">
        {data.items.map((D) => {
          return (
            <div className="show-data" key={D.id}>
              <span>{D.fullname}</span>
              <button
                className="btn-delete"
                onClick={() => dispacth(deleteData(D.id))}
              >
                delete
              </button>
              <button
                className="btn-edit"
                onClick={() => editclickhandel(D.id)}
              >
                edit
              </button>
            </div>
          );
        })}
      </div>
      <Showdata />
    </>
  );
};

export default Form;
