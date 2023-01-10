import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const ExpenseTotal = () => {
  const { expanses } = useContext(AppContext);

  const totalExpanses = expanses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>Spent: ${totalExpanses}</span>
    </div>
  );
};

export default ExpenseTotal;
