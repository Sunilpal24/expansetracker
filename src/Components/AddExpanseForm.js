import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpanseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const expanse = {
      id: uuidv4(),
      name: name,
      cost: Number(cost)
    };
    dispatch({
      type: "ADD_EXPANSE",
      payload: expanse
    });
    setName("");
    setCost("");
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">name</label>
      <input
        required="required"
        type="text"
        className="form-control"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label htmlFor="cost">Cost</label>
      <input
        required="required"
        type="number"
        className="form-control"
        id="cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      ></input>
      <button type="submit" className="btn btn-primary mt-3">
        Save
      </button>
    </form>
  );
};
export default AddExpanseForm;
