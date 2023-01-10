import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AppContext } from "./AppContext";

const ExpanseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPANSE",
      payload: props.id
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge bg-primary badge-pill mr-3">${props.cost}</span>
        <MdDeleteForever
          className="dlticon"
          size="1.5em"
          onClick={handleDelete}
        />
      </div>
    </li>
  );
};
export default ExpanseItem;
