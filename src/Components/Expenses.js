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
const Expensefil = props.items.filter((year)=>{
  return year.date.getFullYear().toString()===FilterdYear
})

  return (
    <div className="card">
      <ExpenseFilter
        selected={FilterdYear}
        OnChangeFilter={FilterChangeHandler}
      ></ExpenseFilter>

      {Expensefil.map((expenses) => (
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
