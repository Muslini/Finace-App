import React from "react";
import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props) {
    return (
        <div className="expense-box">
        <ExpenseDate date={props.date} />
        <div><h2>{props.title}</h2></div>
        <div className="expense-amount">${props.amount}</div>
        </div>
    )
}

export default ExpenseItem