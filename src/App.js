import Expensitem from "./Components/Expens";
import NewExpenses from "./Components/NewExpenses";
import "./App.css";

const App=()=> {
  const expense = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 88.58,
      date: new Date(2020, 7, 12),
      LocationOfExpenditure: "Dmart Usa",
    },
    {
      id: "e1",
      title: "Toilet paper",
      amount: 88.58,
      date: new Date(2020, 7, 12),
      LocationOfExpenditure: "Dmart Usa",
    },
    {
      id: "e1",
      title: "Toilet paper",
      amount: 88.58,
      date: new Date(2020, 7, 12),
      LocationOfExpenditure: "Dmart Usa",
    },
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
      <NewExpenses></NewExpenses>
     
      <Expensitem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        location={expense[0].LocationOfExpenditure}
      ></Expensitem>
      <Expensitem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
        location={expense[1].LocationOfExpenditure}
      ></Expensitem>
      <Expensitem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
        location={expense[2].LocationOfExpenditure}
      ></Expensitem>
      <Expensitem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
        location={expense[3].LocationOfExpenditure}
      ></Expensitem>
    </div>
  );
}

export default App;
