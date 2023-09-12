import "./Expens.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
const deleteHandler =()=>{
  console.log('clicked')
  
}
const Expensitem=(props)=> {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={deleteHandler}>DeleteExpens</button>
    </div>
  );
}
export default Expensitem;

