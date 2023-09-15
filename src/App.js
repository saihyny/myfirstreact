
import NewExpenses from "./Components/NewExpenses";
import Expenses from "./Components/Expenses";
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
 

  
  const SaveData =(props)=>{
   
    const values = {
      ...props,
    }
    console.log(values)

  }

 
  return (
    
    <div>
     <NewExpenses OnSaveData={SaveData}></NewExpenses>
     <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
