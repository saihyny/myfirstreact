import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpenseForm = (props) => {
  const [EnterdTitle, newTitle] = useState("");
  const [EnterdAmount, newAmount] = useState("");
  const [EnterdDate, newDate] = useState("");

  const ChangeTitle = (event) => {
    newTitle(event.target.value);
  };
  const ChangeAmount = (event) => {
    newAmount(event.target.value);
  };
  const ChangeDate = (event) => {
    newDate(event.target.value);
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    const FormData = {
      title: EnterdTitle,
      amount: EnterdAmount,
      date: new Date(EnterdDate),
    };
    props.onSaveExpenseData(FormData)

    
   newTitle('');
   newAmount('');
   newDate('');
  };

  return (
    

    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control-label">
          <label>title</label>
          <input
            className="new-expense__control-input"
            type="text"
            value={EnterdTitle}
            onChange={ChangeTitle}
          />
        </div>
        <div className="new-expense__control-label">
          <label>amount</label>
          <input
            className="new-expense__control-input"
            type="number"
            min="0.01"
            step="0.01"
            value={EnterdAmount}
            onChange={ChangeAmount}
          />
        </div>
        <div className="new-expense__control-label">
          <label>Date</label>
          <input
            className="new-expense__control-input"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={EnterdDate}
            onChange={ChangeDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.change}>Cancel</button>
        <button type="Submit" >Add Expense</button>
      </div>
     
    </form>
  );
};

export default ExpenseForm;
