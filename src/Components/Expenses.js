import ExpensItem from "./ExpensItem";
import "./Expens.css";
import ExpenseFilter from "./ExpenseFilter";
import React,{useState} from "react";
// import Card from "./Card";
const Expenses = (props) => {
  
const [FilterdYear,SetFilterYear] = useState('2020')

const FilterChangeHandler=(Year)=>{
  SetFilterYear(Year)
}

  return (
    <div className="card" >
      <ExpenseFilter selected={FilterdYear} OnChangeFilter={FilterChangeHandler} ></ExpenseFilter>
      <ExpensItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location={props.items[0].LocationOfExpenditure}
      ></ExpensItem>
      <ExpensItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location={props.items[1].LocationOfExpenditure}
      ></ExpensItem>
      <ExpensItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location={props.items[2].LocationOfExpenditure}
      ></ExpensItem>
      <ExpensItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        location={props.items[3].LocationOfExpenditure}
      ></ExpensItem>
    </div>
  );
};
export default Expenses;
