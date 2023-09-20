
import NewExpenses from "./Components/NewExpenses";
import Expenses from "./Components/Expenses";
import "./App.css";
import React,{useState} from "react";

const expense = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 88.58,
    date: new Date(2020, 7, 12),
  },
  {
    id: "e2",
    title: "laptop",
    amount: 50.58,
    date: new Date(2020, 8, 12),
  },
  {
    id: "e3",
    title: "shoes",
    amount: 30.58,
    date: new Date(2020, 6, 12),
  },
  {
    id: "e4",
    title: "bag",
    amount: 20.58,
    date: new Date(2020, 10, 12),
  },
];
const App=()=> {
const [onExpenses,Setexpenses] =useState(expense)
 

  
  const SaveData =(props)=>{
    Setexpenses((previos)=>
    {
      return [props, ...previos]
    } )
  }

 
  return (
    
    <div>
     <NewExpenses OnSaveData={SaveData}></NewExpenses>
     <Expenses items={onExpenses}></Expenses>
    </div>
  );
}

export default App;
