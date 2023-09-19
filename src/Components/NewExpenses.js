// import ExpenseDate from './ExpenseDate'
import ExpenseForm from "./ExpenseForm";
import "./ExpensesForm.css";
import React, { useState } from "react";

const NewExpenses = (props) => {

  const [setData, editSetdata] = useState(false);

  const SaveExpenseDataHandler = (EnterdExpenseData) => {
    const ExpenseData = {
      ...EnterdExpenseData,
      id: Math.random().toString(),
    };
    props.OnSaveData(ExpenseData);
    editSetdata(false)
  };
  const buttonHandler = () => {
    editSetdata(true);
  };
  const stopExcuting=()=>{
    editSetdata(false)
  }
  return (
    <div className="new-expense">
      {!setData&&<button onClick={buttonHandler}>Add New Expense</button>}
      {setData&&
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} change={stopExcuting}>
        </ExpenseForm>
      }
    </div>
  );
};
export default NewExpenses;
