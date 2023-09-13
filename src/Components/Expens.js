import React, { useState } from "react";
import "./Expens.css";
import ExpenseDate from "./ExpenseDate";

const Expensitem = (props) => {
  const [amount, newTitle] = useState(props.amount);
  const deleteHandler = () => {
    
    newTitle(100);
    
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={deleteHandler}>DeleteExpens</button>
    </div>
  );
};
export default Expensitem;
