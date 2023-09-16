import ExpensItem from "./ExpensItem";
import "./Expens.css";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
// import Card from "./Card";
const Expenses = (props) => {
  const [FilterdYear, SetFilterYear] = useState("2020");

  const FilterChangeHandler = (Year) => {
    SetFilterYear(Year);
  };

  return (
    <div className="card">
      <ExpenseFilter
        selected={FilterdYear}
        OnChangeFilter={FilterChangeHandler}
      ></ExpenseFilter>
      {props.items.map((expenses) => (
        <ExpensItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        ></ExpensItem>
      ))}
    </div>
  );
};
export default Expenses;
