import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";

const Budget = () => {
  const { dispatch } = useContext(AppContext);
  const [balance, setBalance] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_BUDGET",
      payload: balance
    });
  };

  return (
    <div className="alert alert-secondary d-flex ">
      <span>Budget:$</span>
      <div class="wrapper">
        <div className="input-data">
          <form onSubmit={handleSubmit}>
            <input
              required="required"
              type="text"
              className="form-control"
              id="name"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
            <div className="underline"></div>
          </form>
        </div>
        </div>
        </div>
  );
};

export default Budget;
