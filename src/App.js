import Expensitem from "./Components/Expens";

import "./App.css";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 88.58,
      date: new Date(2020, 7, 12),
      LocationOfExpenditure: "Dmart Usa",
    },
  ];
  return (
    <div>
      <h2>Expense items</h2>
      <Expensitem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        location={expense[0].LocationOfExpenditure}
      ></Expensitem>
    </div>
  );
}

export default App;
