import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import ExpenseTotal from "./Components/ExpanseTotal";
import ExpanseList from "./Components/ExpanseList";
import AddExpanseForm from "./Components/AddExpanseForm";
import { AppProvider } from "./Components/AppContext";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
      <div className="alert alert-warning text-center"><span>Don't forget to click Enter button after type budget amount!</span></div>
        <h1 className="mt-3 text-center">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3 text-center">Expanses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpanseList />
          </div>
        </div>
        <h3 className="mt-3 text-center">Add Expense</h3>
        <AddExpanseForm />
      </div>
    </AppProvider>
  );
};

export default App;
