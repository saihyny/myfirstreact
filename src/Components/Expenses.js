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
  const Expensefil = props.items.filter((year) => {
    return year.date.getFullYear().toString() === FilterdYear;
  });

  let checkExpense = <p>there is no element here</p>;
  console.log(Expensefil.length);

  if (Expensefil.length > 0) {
    checkExpense = Expensefil.map((expenses) => (
      <ExpensItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      ></ExpensItem>
    ));
  }

  return (
    <div className="card">
      <ExpenseFilter
        selected={FilterdYear}
        OnChangeFilter={FilterChangeHandler}
      ></ExpenseFilter>
      {checkExpense}
      {Expensefil.length === 1 ? 
       (<p> "Only single Expense here. Please add more...</p>) 
       : ('')
        
      }
    </div>
  );
};
export default Expenses;
