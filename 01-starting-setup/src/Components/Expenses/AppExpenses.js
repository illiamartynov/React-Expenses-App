/* eslint-disable no-lone-blocks */
import React, { useState } from "react";

import "./AppExpenses.css";
import "./ExpenseItem.css";

import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import ChartExpenses from "../NewExpense/ChartExpenses";
import ExpenseList from "./ExpenseList";

function AppExpenses(props) {

  const [savedYear, setSavedYear] = useState("2023");
  const yearChangeHAndler = (year) => {
    setSavedYear(year);
  };

  // let expenseContent = <p style={{ color: "white" }}>There is no elements found</p>

  const yearFilter = props.items.filter((array) => {
    return array.date.getFullYear().toString() === savedYear;
  });




{/* {yearFilter.length === 0 ? (
        expenseContent
      ) : (
        yearFilter.map((e) => (
          <ExpenseItem
            title={e.title}               //second way. Writing more code, but a way simpler in understanding
            amount={e.amount}
            date={e.date}
            key={e.id}
          ></ExpenseItem>
        ))
      )} */}


  // if(yearFilter.length === 0){
  //   expenseContent = <p style={{ color: "white" }}>There is no elements found</p>
  // }else{
    // expenseContent = yearFilter.map((e) => (
    //       <ExpenseItem
    //         title={e.title}
    //         amount={e.amount}
    //         date={e.date}
    //         key={e.id}
    //       ></ExpenseItem>
    //     ))}
  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYEar={savedYear}
        onSaveYear={yearChangeHAndler}
      ></ExpensesFilter>
      <ChartExpenses expenses={yearFilter} />
        <ExpenseList items={yearFilter} />
    </Card>
  );
}
export default AppExpenses;
