import React from "react";
import { useSelector } from "react-redux";
const Showdata = () => {
  const data = useSelector((state) => state);
  return (
    <>
      <div className="form-show">
        {data.items.map((d) => {
          return (
            <div key={d.id}>
              <span>{d.fullname}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Showdata;
