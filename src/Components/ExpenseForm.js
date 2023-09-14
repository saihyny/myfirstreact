import React,{useState} from "react";
import "./ExpensesForm.css";
const ExpenseForm = () => {

  const [EnterdTitle,newTitle]=useState('')
  const [EnterdAmount,newAmount] =useState('')
  const [EnterdDate,newDate] = useState('')

  const DeleteHandler=(event)=>{
      newTitle(event.target.value)
  };
  const ChangeAmount=(event)=>{
    newAmount(event.target.value)
  }
  const ChangeDate=(event)=>{
    newDate(event.target.value)
  }
  const SubmitHandler=(e)=>{
     e.preventDefault();
     const FormData ={
      title:EnterdTitle,
      amount:EnterdAmount,
      date: new Date(EnterdDate),
     }
     console.log(FormData)
  }

  return (
    
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control-label">
          <label>title</label>
          <input type="text" id="iteminput" onChange={DeleteHandler} />
        </div>
        <div className="new-expense__control-label">
          <label >amount</label>
          <input type="number" min="0.01" step="0.01" onChange={ChangeAmount} />
        </div>
        <div className="new-expense__control-label">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={ChangeDate}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
