import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Filter from "./Filter";
import Chart from "./chart/Chart";

function Expenses(props) {
  const [selectedYear, setYear] = useState("All");
  const expenses = props.data;
  function equality(expense) {
    if(
    expense.date.toLocaleString("en-US", {year : "numeric"}) === selectedYear)
    return expense
  };
  const ex = expenses.filter(equality);


  function handleOnSend(year) {
    setYear(year);
  }
  function mapThrough(doc) {
    return (
      <ExpenseItem
        key={doc.id}
        date={doc.date}
        title={doc.title}
        amount={doc.amount}
      />
    );
  }

  
  return (
    <div className="expenses">
      <Filter defaultYear={selectedYear} onSend={handleOnSend} />
      <Chart neededYear={ex}/>
      {selectedYear === "All" ? expenses.map(mapThrough) : ex.map(mapThrough)}
    </div>
  );
}

export default Expenses;
