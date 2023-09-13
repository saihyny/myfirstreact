import React, { useState } from "react";
import "./Expens.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseForm = (props) => {
    const [amount, newTitle] = useState(props.amount);
    const deleteHandler = () => {
      
      newTitle(100);
      
    };
    return (
        <div>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </div>
      <button onClick={deleteHandler}>Delete</button>
      </div>
    );
};
export default ExpenseForm;
