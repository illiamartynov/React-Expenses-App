import React, { useState } from "react";
import AppExpenses from "./Components/Expenses/AppExpenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Snickers",
    amount: 27,
    date: new Date(2020, 6, 14),
  },
  { id: "e2", title: "Candy", amount: 5, date: new Date(2020, 2, 12) },
  {
    id: "e3",
    title: "Shirt",
    amount: 10,
    date: new Date(2021, 7, 28),
  },
  {
    id: "e4",
    title: "GTA",
    amount: 10,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e5",
    title: "Battle pass",
    amount: 15,
    date: new Date(2020, 8, 4),
  },
  
  
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <AppExpenses items={expenses}> </AppExpenses>
    </div>
  );
}

export default App;
