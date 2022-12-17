import React from "react";
function ExpenseDate(props) {

    return (
        <div className="expense-date">
            <div className="expense-month">{props.date.toLocaleString("en-US", {month : "long"})}</div>
            <div className="expense-year">{props.date.toLocaleString("en-US", {year : "numeric"})}</div>
            <div className="expense-day">{props.date.toLocaleString("en-US", {day : "numeric"})}</div>
        </div>
    )
}

export default ExpenseDate;