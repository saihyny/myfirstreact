
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
