// import ExpenseDate from './ExpenseDate'
import ExpenseForm from './ExpenseForm'
import './ExpensesForm.css'
import React from 'react'
const NewExpenses =(props)=>{
const SaveExpenseDataHandler=(EnterdExpenseData)=>{
   
   const ExpenseData={
    ...EnterdExpenseData,
    id:Math.random().toString(),
   } 
   props.OnSaveData(ExpenseData);
};



return (
<div className='new-expense' >
<ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>
</div>
)
}
export default NewExpenses