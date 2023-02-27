import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
const [clicked, setClicked] = useState(false)

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData)
    setClicked(false)
  };






  const onClickHandler = () => {
    setClicked(true)
  }

  const onCancelHAndler = () => {
    setClicked(false)
  }

  return (
    <div className="new-expense">
      {!clicked && <button onClick = {onClickHandler}>Add Expense</button>}
      {clicked && <ExpenseForm onCancel = {onCancelHAndler} onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>}
    </div>
  );
};
export default NewExpense;
