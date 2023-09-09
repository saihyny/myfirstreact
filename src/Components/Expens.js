import './Expens.css'
function Expensitem() {
 const expenseDate = new Date(2023,10,10)
 const expenseItem = 'car insurence'
 const expensePrice = 200
 const LocationOfExpenditure = 'Dmart'
 
 
 
    return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div>{LocationOfExpenditure}</div>
        <div className="expense-item__price">${expensePrice}</div>
        
      </div>
    </div>
  );
}
export default Expensitem;
