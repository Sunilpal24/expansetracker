import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import ExpanseItem from "./ExpanseItem";

const ExpanseList = () => {
  const { expanses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expanses.map((expanse) => (
        <ExpanseItem id={expanse.id} name={expanse.name} cost={expanse.cost} />
      ))}
    </ul>
  );
};
export default ExpanseList;
